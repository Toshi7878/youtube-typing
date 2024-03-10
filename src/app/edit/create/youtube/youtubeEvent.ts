import { Ticker } from "@createjs/core";
import { timer } from "../timer/timer"


const ticker = new Ticker();
ticker.timingMode = ticker.RAF;
export class YouTubeEvent {
	play() {
		console.log('play')
		ticker.addEventListener("tick", timer.update);
	}

	pause() {
		console.log('pause')
	}

	end() {
		console.log('end')
	}

	seek() {
		console.log('seek')
	}

	ready() {
		console.log('ready')
	}
}