import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function tabLineInput() {
	return (
		<Card>
			<CardContent className="space-y-2">
				<div className="space-y-1 flex items-end">
					<Input id="time" placeholder="time" className="w-14" />
					<Input id="lyrics" placeholder="歌詞" />
				</div>
				<div className="space-y-1 flex items-end">
					<Input id="Number" placeholder="No." className="w-14" disabled />
					<Input id="word" placeholder="よみ" />
				</div>
				<div className="space-y-1 flex items-baseline">
					<Button variant="custom" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">追加</Button>
					<Button variant="custom" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">変更</Button>
					<Button variant="custom" className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">よみ変換</Button>
					<Button variant="custom" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">削除</Button>

				</div>
				<div className="space-y-1 flex items-baseline">
					<Textarea placeholder="ここから歌詞をまとめて追加できます。" />
				</div>
			</CardContent>
		</Card>
	)
}