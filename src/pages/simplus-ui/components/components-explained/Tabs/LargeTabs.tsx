import * as React from "react";
import { Tabs, TabPane } from "@simplus/siui"


export default function(props){

	return (	
		<Tabs selectedDefault={0} fillContainer>
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
	)
}