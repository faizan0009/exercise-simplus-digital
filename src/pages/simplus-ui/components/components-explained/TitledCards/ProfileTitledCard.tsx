import * as React from "react";
import { TitledCard, IconAndName } from "@simplus/siui"
import { Icon, Button } from  "antd"

export default function(props){

	return (
		<TitledCard 
			margin 
			rounded
			titleStyle = {{backgroundImage:"url(/demo/assets/Gradient-01.png)"}}
			picture="/assets/macaw.jpg" >
			<h3>Be lekker</h3>
			<div style={{minHeight:"10rem", display:"flex", flexDirection:"column", justifyContent:"center"}}>
			<IconAndName icon={<Icon type="mail"></Icon>} name="test@simplusinnovation.com"></IconAndName>
			<IconAndName icon={<Icon type="user"></Icon>} name="manager"></IconAndName>
			<IconAndName icon={<Icon type="phone"></Icon>} name="+00000000"></IconAndName>
			</div>
			<div style={{display: "flex", justifyContent:"space-evenly"}}>
				<Button>Edit</Button>
				<Button type="danger">Delete</Button>
			</div>
		</TitledCard>
	)
}
 
 
 