import { Ticker } from '@pixi/ticker';
import { timer } from "../timer/timer"


const ticker = new Ticker();
ticker.add(timer.update);

export class YouTubeEvent {
	play() {
		console.log('play')
		ticker.start();
	}

	pause() {
		console.log('pause')
		ticker.stop();
	}

	end() {
		console.log('end')
		ticker.stop();
	}

	seek() {
		console.log('seek')
	}

	ready() {
		console.log('ready')
	}
}