import {
	Card,
	CardContent,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function tabMovieInfo() {
	return (
		<Card>
			<CardContent className="space-y-2">
				<div className="space-y-1">
					<Label htmlFor="url">YouTube URL</Label>
					<Input id="url" />
				</div>
				<div className="space-y-1">
					<Label htmlFor="title">譜面タイトル</Label>
					<Input id="title" />
				</div>
			</CardContent>
		</Card>
	)
}