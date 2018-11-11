import * as React from "react";
import { Card, TopMenu, Icon, Input, Search } from "si-components";

const Item = TopMenu.Item;

export default function(props){

	const menu = 
		<TopMenu >		
			<TopMenu.Item>Section 1</TopMenu.Item>
			<TopMenu.Item>Section 2</TopMenu.Item>
			<TopMenu.Item>Section 3</TopMenu.Item>
		</TopMenu>
				

	return (
		<Card vMargin >
			{menu}
		</Card>
	)

}

