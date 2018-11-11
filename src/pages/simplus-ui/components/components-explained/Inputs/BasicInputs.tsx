import * as React from "react"
import { Input } from "@simplus/siui"
import {Icon} from "antd"


export default function(props){

	return(
		<div className="si-inputs-demo">
			<Input label="Press Enter" onPressEnter = { ()=>alert("Enter Pressed")  } />
			<Input label={(value)=>"Value: " + value} type="number" placeholder="Enter a number"/>
			<Input label={<span>With Icon</span>} icon={<Icon type="user"/>} placeholder="Profile" />
			<Input label="Date Input" tooltip="Start Date" type="date" />
		</div>
	)

}