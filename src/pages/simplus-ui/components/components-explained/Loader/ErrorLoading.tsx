import * as React from "react";
import { Card, Loader } from "@simplus/siui"


export default function(props){

	return (
		<div style={{position: 'relative'}}>
			<Loader error/>
			<Card padding  style={{width: 250}}>
				<p>Some content</p> 
				<p>Some content</p>
				<p>Some content</p>
			</Card>
		</div>
	)

}