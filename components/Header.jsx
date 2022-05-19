import Head from 'next/head';

const Header = () => {
	return (
		<Head>
			<title>Hacker news - Jayraj Rathod</title>
			<meta
				name='description'
				content='Simple NextJS news catalogue to displat news regarding hackers and related.'
			/>
			<link rel='icon' href='/favicon.ico' />

			{/* Fonts */}
			<link rel='preconnect' href='https://fonts.googleapis.com' />
			<link
				rel='preconnect'
				href='https://fonts.gstatic.com'
				crossOrigin='true'
			/>
			<link
				href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500&display=swap'
				rel='stylesheet'
			/>
		</Head>
	);
};

export default Header;
