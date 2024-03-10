'use client'

import React from 'react';
import ReactPlayer from 'react-player';

const Example: React.FC = () => {
	return <ReactPlayer
		url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
		config={{
			youtube: {
				playerVars: {
					controls: 0,
					disablekb: 1,
					enablejsapi: 1
				}
			}
		}}
	/>;
};

export default Example;