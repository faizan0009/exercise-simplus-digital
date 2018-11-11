import * as React from "react"
import {Table} from "antd"
import {Card, Button} from "@simplus/siui"
import {TableCardComboLayout} from "@simplus/macaw-business"

export default function(props){
const Title = () => {
	return (
		<span>Sample Table Title</span>
	)
}
const sample_table = <Table 
	title={Title}
	columns={[
		{
			dataIndex : "name",
			key : "name",
			title: "Name",
			width: 200
		},
		{
			dataIndex : "hobby",
			key : "hobby",
			title: "Hobby",
			width: 300
		},
		{
			dataIndex : "description",
			key : "description",
			title : "Description",
			width: 300
		}
	]}
	pagination={{total : 22,pageSize : 12}} 
	dataSource={[
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
	return(
		<TableCardComboLayout
			padding
			table={sample_table}>
				<Button size="jumbo" style={{width:280, height:60}}>Be Lekker</Button>
				<Card 
					rounded
					className="default">
					<div className="default-message">
						<h1>SAMPLE CARD</h1>
						<p>Description of the card</p>
					</div>
				</Card>
		</TableCardComboLayout>
	)

}