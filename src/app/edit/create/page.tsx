import React from 'react';
import YouTube from '../../../client/components/YouTube';
import { YouTubeEvent } from '../create/youtubeEvent';


const page: React.FC = () => {
	return <YouTube movieID='6S09bDbVdlY' events={YouTubeEvent} />;
};

export default page;