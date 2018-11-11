import * as React from "react"
import {Card, Tabs, TabPane} from "@simplus/siui"

export default function(){

	return(
		<Card>
			<Tabs selectedDefault={0}>
				<TabPane label="Tab 1">
					<div>This is my tab 1 contents!</div>
				</TabPane>
				<TabPane label="Tab 2">
					<div>This is my tab 2 contents!</div>
				</TabPane>
				<TabPane label="Tab 3">
					<div>This is my tab 3 contents</div>
				</TabPane>
			</Tabs>
		</Card>
	)

}