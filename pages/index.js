import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Header />
			<Navbar />

			<section className={styles.layout}>
				<Layout />
			</section>

			{/* <main className={styles.main}>Hacker News</main> */}

			<Footer />
		</div>
	);
}
