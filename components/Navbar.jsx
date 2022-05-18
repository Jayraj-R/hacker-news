import styles from '../styles/Navbar.module.css';

const Navbar = () => {
	const pages = ['About', 'Popular stories', 'Contact', 'Feedback'];
	return (
		<div className={styles.container} xs={12}>
			<section className={styles.logo}>LOGO</section>
			<section className={styles.links}>
				{pages.map((page, index) => {
					return (
						<div key={index} className={styles.navLink}>
							{page}
						</div>
					);
				})}
			</section>
		</div>
	);
};

export default Navbar;
