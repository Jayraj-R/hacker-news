import { useEffect, useState } from 'react';
import { getSearchStories } from '../functions/story';
import styles from '../styles/Layout.module.css';
import AsyncSelect from 'react-select/async';

const customStyles = {
	control: (styles, { isFocused }) => ({
		...styles,
		backgroundColor: '#fff',
		fontSize: '1.1rem',
		borderRadius: '8px',
		border: isFocused ? '2px solid #ec7267' : '2px solid #c2c2c2',
		outline: 'none',
		width: '100%',
		boxShadow: '2px 2px 5px #eee',
		'&:hover ': {
			border: '2px solid #ec7267',
			cursor: 'pointer',
		},
	}),
	option: (styles) => {
		return {
			...styles,
			backgroundColor: '#fff',
			color: 'black',
			cursor: 'default',
			'&:hover ': {
				background: '#eee',
				cursor: 'pointer',
			},
		};
	},
};

const Search = ({}) => {
	const [keyWord, setKeyWord] = useState('');
	const [searchOpt, setSearchOpt] = useState([]);
	const [selected, setSelected] = useState({});

	async function handleSearchResult(query) {
		await getSearchStories({ keyWord: query }).then((data) => {
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
				styles={customStyles}
				classNamePrefix='select'
				isSearchable={true}
				isClearable={true}
				cacheOptions
				defaultOptions
				placeHolder='Search by stories'
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
