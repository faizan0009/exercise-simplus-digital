import * as React from "react"
import {SubLeftMenu} from "@simplus/siui"

const Item = SubLeftMenu.Item;
const ItemGroup = SubLeftMenu.ItemGroup;
const Group = SubLeftMenu.Group;
const Separator = SubLeftMenu.Separator;

export default function(){

	return(
		<SubLeftMenu>
			<Group collapse={false} title="Group 2">
				<ItemGroup title="Menu Group 1">
					<Item>Menu 1</Item>
					<Item>Menu 2</Item>
					<Item>Menu 3</Item>
				</ItemGroup> 
			</Group>
		</SubLeftMenu>
	)

}