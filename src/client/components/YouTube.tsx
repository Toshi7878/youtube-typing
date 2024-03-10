'use client'

import React from 'react';
import ReactPlayer from 'react-player';
type YouTubeProps = {
	movieID: string;
	events: new () => YouTubeEvent; // 'new' キーワードを使用して YouTubeEvent のインスタンスを生成
};

const YouTube: React.FC<YouTubeProps> = ({ movieID }) => {
	const eventInstance = new events(); // イベントクラスのインスタンスを生成

	return (
		<ReactPlayer
			url={`https://www.youtube.com/watch?v=${movieID}`}
			volume={0.1}
			config={{
				youtube: {
					playerVars: {
						controls: 0,
						disablekb: 1,
						enablejsapi: 1,
					},
				},
			}}
			onPlay={eventInstance.play}
			onPause={eventInstance.pause}
			onEnded={eventInstance.end}
			onSeek={eventInstance.seek}
			onReady={eventInstance.ready}
		/>
	)
};

export default YouTube;