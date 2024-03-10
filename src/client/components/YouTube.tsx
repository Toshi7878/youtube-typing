import React from 'react';
import ReactPlayer from 'react-player';

interface YouTubeEvent {
	play: () => void;
	pause: () => void;
	end: () => void;
	seek: () => void;
	ready: () => void;
}

type YouTubeProps = {
	movieID: string;
	events: YouTubeEvent;
};

class YouTube extends React.Component<YouTubeProps> {
	public player: ReactPlayer | null = null;
	private eventInstance: YouTubeEvent;

	constructor(props: YouTubeProps) {
		super(props);
		this.eventInstance = props.events;
	}

	render() {
		const { movieID } = this.props;

		return (
			<ReactPlayer
				ref={(ref) => (this.player = ref)}
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
				onPlay={this.eventInstance.play}
				onPause={this.eventInstance.pause}
				onEnded={this.eventInstance.end}
				onSeek={this.eventInstance.seek}
				onReady={this.eventInstance.ready}
			/>
		);
	}
}

export default YouTube;