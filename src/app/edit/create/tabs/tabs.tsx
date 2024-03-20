
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tabs"
import { tabMovieInfo } from "./tab/tabMovieInfo"
import { tabLineInput } from "./tab/tabLineInput"
import { tabUpload } from "./tab/tabUpload"

export function TabsDemo() {
	return (
		<Tabs defaultValue="動画情報" className="">
			<TabsList className="grid w-full grid-cols-3">
				<TabsTrigger value="動画情報">動画情報</TabsTrigger>
				<TabsTrigger value="ライン編集">ライン編集</TabsTrigger>
				<TabsTrigger value="保存">保存</TabsTrigger>
			</TabsList>

			<TabsContent value="動画情報">
				{tabMovieInfo()}
			</TabsContent>
			<TabsContent value="ライン編集">
				{tabLineInput()}
			</TabsContent>
			<TabsContent value="保存">
				{tabUpload()}
			</TabsContent>
		</Tabs>
	)
}