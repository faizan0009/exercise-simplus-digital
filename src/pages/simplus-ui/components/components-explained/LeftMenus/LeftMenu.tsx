import * as React from "react";
import { Card, LeftMenu } from "@simplus/siui";
import {Icon} from "antd"

const Item = LeftMenu.Item
const Separator = LeftMenu.Separator;

export default function(props){

	const menu = <LeftMenu width={200} >
		<Item icon={<Icon type="area-chart" />}>Menu 1</Item>
		<Item icon={<Icon type="line-chart" />}>Menu 2</Item>
		<Item icon={<Icon type="setting" />}>Menu 3</Item>
		<Separator/>
		<Item icon={<Icon type="area-chart" />}>Menu 1</Item>
		<Item icon={<Icon type="line-chart" />}>Menu 2</Item>
		<Item icon={<Icon type="setting" />}>Menu 3</Item>
	</LeftMenu>

	return (
		<Card vMargin >
			{menu}
		</Card>
	)

}

