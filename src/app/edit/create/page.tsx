'use client'

import React, { createContext } from "react";
import { youTube } from "./youtube/youtube"
import { TabsDemo } from "./tabs/tabs"
import { ModeToggle } from '../../../client/components/theme-toggle-button'


const page = () => {
	const youTubeContext = createContext(youTube)

	return <youTubeContext.Provider value={youTube}>
		<div className="grid grid-cols-12 mx-12 mt-14">
			<div className="col-span-4">{youTube.render()}</div>
			<div className="col-span-8">{TabsDemo()}</div>
			<div>{ModeToggle()}</div>
		</div>
	</youTubeContext.Provider>
};

export default page;