import * as React from "react";
import { TitledCard } from "@simplus/siui"
import { Button } from "antd"

export default function(props){

	return (
		<TitledCard 
			margin 
			title="Hello" 
			onClose={()=>{ alert("Closed") }} 
			titleStyle={{ background : "#FFAFF0" }} >
			<h3 style={{ display:"flex", justifyContent:"center", padding : "3rem" }}> Are you sure ? </h3>
			<Button>Confirm</Button>
		</TitledCard>
	)
}
