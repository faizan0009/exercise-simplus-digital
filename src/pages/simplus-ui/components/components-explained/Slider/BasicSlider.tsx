import * as React from "react"
import {Slider} from "@simplus/siui"

export default function(props){
	return (
		<div>
			<Slider label="Single" defaultValue={30}/>
			<Slider label={(value)=>"Slider Values: "+value} tooltip="Uses callback function as label" range defaultValue={[20, 50]} />
		</div>
	)

}