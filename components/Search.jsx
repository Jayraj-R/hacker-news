import { useEffect, useState } from 'react';
import { getStory } from '../functions/story';
import styles from '../styles/Layout.module.css';
import AsyncSelect from 'react-select/async';

const Search = ({}) => {
	const [keyWord, setKeyWord] = useState('');
	const [searchOpt, setSearchOpt] = useState([]);
	const [selected, setSelected] = useState({});

	async function handleSearchResult(query) {
		await getStory({ keyWord: query }).then((data) => {
			setSearchOpt(
				data.hits.map((item) => {
					return {
						value: item.title,
						label: item.title,
						author: item.author,
						created_at: item.created_at,
					};
				})
			);
		});
		return searchOpt;
	}

	console.log(selected);

	return (
		<div>
			<AsyncSelect
				classNamePrefix='select'
				isSearchable={true}
				isClearable={true}
				cacheOptions
				defaultOptions
				loadOptions={handleSearchResult}
				onChange={(option, { action }) => {
					switch (action) {
						case 'remove-value':
						case 'clear':
							setKeyWord(option ? option.value : '');
						case 'select-option':
							setSelected(option ? option : null);
						default:
							break;
					}
				}}
			/>
		</div>
	);
};

export default Search;
