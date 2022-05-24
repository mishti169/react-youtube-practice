import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import VideoDetail from './Components/VideoDetail/VideoDetail';

function App() {
	return (
		<div className='App'>
			<SearchBar />
			<VideoDetail />
			<div>
				this is Videolist
				<div>
					this is videoItem
					<img src='google.com' alt='title' />
					<h3>title</h3>
				</div>
			</div>
		</div>
	);
}
export default App;
