import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import StoryList from '../../components/StoryList';
import styles from '../../styles/Story.module.css';
import leftIcon from '../../public/assets/left.svg';
import Image from 'next/image';
import Search from '../../components/Search';

const SearchResult = () => {
	const router = useRouter();
	const [keyWord, setKeyWord] = useState(router.query.sid);

	useEffect(() => {
		setKeyWord(router.query.sid);
	}, [router]);

	return (
		<>
			<Header />
			<Navbar />

			<div className={styles.container}>
				<section onClick={() => router.back()} className={styles.back}>
					<Image src={leftIcon} width={18} height={18} />
					<p>Back</p>
				</section>
				<section className={styles.search}>
					<Search />
				</section>

				<StoryList keyWord={keyWord} />
			</div>
			<Footer />
		</>
	);
};

export default SearchResult;
