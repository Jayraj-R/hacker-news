import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getSearchStories } from '../functions/story';
import styles from '../styles/Layout.module.css';
import { useRouter } from 'next/router';
// import AsyncSelect from 'react-select/async';

const Search = ({}) => {
	const [keyWord, setKeyWord] = useState('');
	const [searchOpt, setSearchOpt] = useState([]);
	const [selected, setSelected] = useState({});
	const [dropDown, setDropDown] = useState(false);
	const router = useRouter();

	useEffect(() => {
		async function handleSearchResult(query) {
			await getSearchStories({ keyWord: query }).then((data) => {
				setSearchOpt(
					data &&
						data.hits.map((item) => {
							return {
								value: item.title,
								label: item.title,
								author: item.author,
								id: item.objectID,
								created_at: item.created_at,
							};
						})
				);
			});
		}
		setDropDown(true);
		handleSearchResult(keyWord);
	}, [keyWord]);

	useEffect(() => {
		setDropDown(false);
	}, []);

	return (
		<form className={styles.search}>
			<input
				className={styles.searchBar}
				type='text'
				value={keyWord}
				onChange={(e) => setKeyWord(e.target.value)}
				onBlur={() => {
					setTimeout(function () {
						setDropDown(false);
					}, 400);
				}}
				placeholder='Search a story...'
			/>
			<Link href={`/search/${keyWord}`}>
				<button
					className={styles.searchBtn}
					type='submit'
					disabled={keyWord === ''}
					onClick={() => setDropDown(false)}
				>
					Search
				</button>
			</Link>

			{dropDown && (
				<section
					className={styles.searchOpt}
					onClick={() => {
						setDropDown(true);
					}}
				>
					{searchOpt && searchOpt.length !== 0 ? (
						searchOpt.map((opt, ind) => {
							return (
								<div className={styles.opt} key={ind}>
									<Link href={`/news/${opt.id}`}>{opt.value}</Link>
								</div>
							);
						})
					) : (
						<div className={styles.loading}>No realted stories</div>
					)}
				</section>
			)}
		</form>
	);
};

export default Search;
