import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export function tabUpload() {
	return (
		<Card>
			<CardContent className="space-y-2">
				<div className="space-y-1">
					<Label htmlFor="creator_comment">制作者コメント</Label>
					<Input id="creator_comment" />
				</div>
				<div className="space-y-1">
					<Button id='upload'>保存</Button>
				</div>
			</CardContent>
		</Card>
	)
}