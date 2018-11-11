import * as React from "react";
import { Card, LeftMenu, Input, HorizontalNavBar, LeftMenuWrapper } from "@simplus/siui";
import {Icon} from "antd"

const Item = LeftMenu.Item
const Separator = LeftMenu.Separator;

export default function(props){

	const menu = <LeftMenu collapse={true} width={200}>
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
			<LeftMenuWrapper menu={menu}>
				<HorizontalNavBar 
					rightComponents={[
						<Icon type="share-alt" style={{ paddingRight : 10, fontSize : 20 } } className="icon"></Icon>,
						<Input placeholder="Basic usage" className="input"/>
					]} >
					<HorizontalNavBar.Item>Item 1</HorizontalNavBar.Item>
					<HorizontalNavBar.Item>Item 2</HorizontalNavBar.Item>
				</HorizontalNavBar>
			</LeftMenuWrapper>
		</Card>
	)

}