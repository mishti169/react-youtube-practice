import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
	const [inputVal, setInputVal] = useState('');
	// const []

	async function getDataFromApi() {
		const res = await axios.get(
			`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${inputVal}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
		);
		console.log('hii i am calling api', res);
	}
	function changeInputValue(event) {
		setInputVal(event.target.value);
		console.log('hii i am changing input val', event.target.value);
	}
	return (
		<div>
			<div>
				this is searcbar
				<input
					type='search'
					value={inputVal}
					autoFocus
					onChange={changeInputValue}
				/>
				<button type='submit' onClick={getDataFromApi}>
					Search
				</button>
			</div>
		</div>
	);
};

export default SearchBar;
