import * as React from "react";
import { TitledCardTest } from "@simplus/siui"

export default function(props){

	return (
		<TitledCardTest 
			header={<img src="/assets/Sillustration2.png" 
			style={{width : "100%"}}/>} 
			rounded>
			<p>Test</p>
			<p>Test</p>
			<p>Test</p>
		</TitledCardTest>
	)
}
