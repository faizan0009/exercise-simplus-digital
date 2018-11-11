import * as React from "react"
import {Switch} from "@simplus/siui"

export default function(props){
	function onChange(checked) {
		console.log(`switch to ${checked}`);
	  }
	return (
		<Switch tooltip="tooltip" label={(checked)=>"Value: "+checked} defaultChecked onChange={onChange} />
	)

}