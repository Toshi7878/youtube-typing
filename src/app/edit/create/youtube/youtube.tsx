import YouTube from '../../../../client/components/YouTube';
import { YouTubeEvent } from '../youtube/youtubeEvent';
const youTubeEvent = new YouTubeEvent();
export const youTube = new YouTube({
	movieID: '6S09bDbVdlY',
	events: youTubeEvent,
	width: "250px",
	height: "141px"
});