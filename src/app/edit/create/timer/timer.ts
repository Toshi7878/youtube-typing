import { youTube } from '../youtube/youtube';
import { roundByDigit } from '../../../../client/ts/numCalc'

class Timer {

	public currentTime: number
	public constantTime: number

	constructor() {
		this.currentTime = 0
		this.constantTime = 0
	}

	update() {
		this.currentTime = youTube.player!.getCurrentTime()
		console.log(roundByDigit(this.currentTime, 3))
	}

}

export const timer = new Timer()