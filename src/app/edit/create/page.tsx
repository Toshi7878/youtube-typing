'use client'

import React, { createContext } from "react";
import { youTube } from "./youtube/youtube"


const page = () => {
	const youTubeContext = createContext(youTube)

	return <youTubeContext.Provider value={youTube}>
		<div>{youTube.render()}</div>
	</youTubeContext.Provider>
};

export default page;