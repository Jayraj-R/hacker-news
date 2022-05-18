import Search from './Search';
import styles from '../styles/Layout.module.css';
import StoryList from './StoryList';

const Layout = () => {
	return (
		<div className={styles.container}>
			<section className={styles.search}>
				<Search />
			</section>

			<section className={styles.articleSection}>
				<StoryList />
			</section>
		</div>
	);
};

export default Layout;
