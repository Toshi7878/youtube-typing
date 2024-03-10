import { youTube } from '../youtube/youtube';


class Timer {

	public currentTime: number
	public constantTime: number
	constructor() {
		this.currentTime = 0
		this.constantTime = 0
	}

	update() {
		console.log(youTube.player!.getCurrentTime())
	}

}

export const timer = new Timer()