import Search from './Search';
import styles from '../styles/Layout.module.css';

const Layout = () => {
	return (
		<div className={styles.container}>
			<section className={styles.search}>
				<Search />
			</section>
		</div>
	);
};

export default Layout;
