import * as React from "react";
import { Button } from "@simplus/siui"


export default function(props){

	return (
		<div>
			<Button rounded size="small">Small</Button>
			<Button rounded>Regular</Button>
			<Button rounded size="large">Large</Button>
			<Button rounded size="Jumbo">Jumbo</Button>
		</div>
	)

}