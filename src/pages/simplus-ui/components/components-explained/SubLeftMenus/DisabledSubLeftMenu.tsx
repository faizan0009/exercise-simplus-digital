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
			<Group collapse={true} disabled={true} title="Group 3" icon={<Icon type="lock" />}>
				<ItemGroup title="Menu Group 1">
					<Item>Menu 1</Item>
					<Separator/>
					<Item>Menu 2</Item>
					<Item>Menu 3</Item>
				</ItemGroup> 
			</Group>
		</SubLeftMenu>
	)

}