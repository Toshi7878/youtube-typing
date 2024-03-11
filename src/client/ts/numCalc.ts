export function roundByDigit(num: number, digit: number): number {
	const multiplier = Math.pow(10, digit);
	return Math.round(num * multiplier) / multiplier;
}