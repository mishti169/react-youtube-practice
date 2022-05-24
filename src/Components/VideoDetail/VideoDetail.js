import React from 'react';
import ReactPlayer from 'react-player';

const VideoDetail = () => {
	return (
		<>
			<div>
				this is videodetail
				<ReactPlayer
					url={`https://www.youtube.com/watch?v=sPn2HP8cAbo`}
					controls
				/>
			</div>
		</>
	);
};

export default VideoDetail;
