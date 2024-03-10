'use client'

import React, { createContext } from "react";
import YouTube from '../../../client/components/YouTube';
import { YouTubeEvent } from './youtubeEvent';
const youTubeEvent = new YouTubeEvent();
export const youTube = new YouTube({ movieID: '6S09bDbVdlY', events: youTubeEvent });


const page = () => {
	const youTubeContext = createContext(youTube)

	return <youTubeContext.Provider value={youTube}>
		<div>{youTube.render()}</div>
	</youTubeContext.Provider>
};

export default page;