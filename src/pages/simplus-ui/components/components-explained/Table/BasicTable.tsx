import * as React from "react"
import { Table } from "antd"

export default function(props){

	return(
		<Table 
			pagination={false}
			columns={[
				{
					dataIndex : "name",
					key : "name",
					title: "Name"
				},
				{
					dataIndex : "hobby",
					key : "hobby",
					title: "Hobby"
				},
				{
					dataIndex : "description",
					key : "description",
					title : "Description"
				}
			]} dataSource={[
				{name : "Vladimir", hobby: "electro music", description : "Header of the left menu"},
				{name : "Mehdi", hobby : "basketball", description : "Footer of the left menu"},
				{name : "Nilton", hobby : "Something", description : "Whether the left menu collapse or not"},
				{name : "Athi", hobby : "Something", description : "Fixed width of the left menu"},
				{name : "Mat", hobby : "Birds", description : "Whether the collapse menu is hidden or not"},
				{name : "Yoda", hobby : "Boxing", description : "Profile on the left menu"},
				{name : "Sean", hobby : "Something|JSX.Element", description : "text of the popover when hover the profile"},
				{name : "Hani", hobby : "Something.Element | JSX.Element[]", description : "Elements on the top right of the left menu"},
				{name : "Faisal", hobby : "Something.Element | JSX.Element[]", description : "Elements on the top right of the left menu"},
				{name : "Sylia", hobby : "Something.Element | JSX.Element[]", description : "Elements on the top right of the left menu"},
				{name : "Martin", hobby : "Something.Element | JSX.Element[]", description : "Elements on the top right of the left menu"},
			]}>

		</Table>
	)

}