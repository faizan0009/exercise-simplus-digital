import * as React from "react";
import { Card, LeftMenu, Input, HorizontalNavBar, LeftMenuWrapper, HorizontalNavBarWrapper } from "@simplus/siui";
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
			<HorizontalNavBarWrapper menu={<HorizontalNavBar>
						<HorizontalNavBar.Item>Test 1</HorizontalNavBar.Item>
						<HorizontalNavBar.Item>Test 2</HorizontalNavBar.Item>
					</HorizontalNavBar>}>
				<LeftMenuWrapper menu={menu}>
					<HorizontalNavBar>
						<HorizontalNavBar.Item>Test 1</HorizontalNavBar.Item>
						<HorizontalNavBar.Item>Test 2</HorizontalNavBar.Item>
					</HorizontalNavBar>
					<h1>Test 1</h1>
					<h1>Test 2</h1>
					<h1>Test 3</h1>
					<h1>Test 4</h1>
					<h1>Test 5</h1>
					<h1>Test 6</h1>
					<h1>Test 7</h1>
				</LeftMenuWrapper>
			</HorizontalNavBarWrapper>
		</Card>
	)

}