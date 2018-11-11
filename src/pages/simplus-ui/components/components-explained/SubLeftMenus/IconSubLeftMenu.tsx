import * as React from "react"
import {SubLeftMenu} from "@simplus/siui"
import {Icon} from "antd"

const Item = SubLeftMenu.Item;
const ItemGroup = SubLeftMenu.ItemGroup;
const Group = SubLeftMenu.Group;
const Separator = SubLeftMenu.Separator;

export default function(){

	return(
		<SubLeftMenu>
			<Group collapse={true} title="Group 1" icon={<Icon type="folder" />}>
				<ItemGroup title="Menu Group 1">
					<Item icon={<Icon type="file" />}>Menu 1</Item>
					<Item icon={<Icon type="file" />}>Menu 2</Item>
					<Item icon={<Icon type="file" />}>Menu 3</Item>
				</ItemGroup> 
			</Group>
		</SubLeftMenu>
	)

}