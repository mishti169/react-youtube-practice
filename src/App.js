import './App.css';
import axios from 'axios';
import ReactPlayer from 'react-player';

function App() {
	function getDataFromApi() {
		axios.get(
			`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${inputVal}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
		);
		console.log('hii calling api');
	}
	return (
		<div className='App'>
			<div>
				this is searcbar
				<input type='search' autoFocus />
				<button onClick={getDataFromApi}>Search</button>
			</div>
			<div>
				this is videodetail
				<ReactPlayer
					url={`https://www.youtube.com/watch?v=sPn2HP8cAbo`}
					controls
				/>
			</div>
		</div>
	);
}
export default App;
