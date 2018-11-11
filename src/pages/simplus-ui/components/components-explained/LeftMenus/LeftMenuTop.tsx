import * as React from "react";
import { Card, LeftMenu} from "@simplus/siui";
import {Icon} from "antd"

const Item = LeftMenu.Item
export default function(props){

	return (
		<Card vMargin style={{ height : "40vh"}}>
			<LeftMenu hideCollapse>
				<Item icon={<Icon type="area-chart" />}>Menu 1</Item>
				<Item icon={<Icon type="line-chart" />}>Menu 2</Item>
				<Item icon={<Icon type="setting" />}>Menu 3</Item>
			</LeftMenu>
		</Card>
	)

}