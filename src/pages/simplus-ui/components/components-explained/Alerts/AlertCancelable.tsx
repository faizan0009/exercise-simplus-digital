import * as React from "react"
import { Alert } from "@simplus/siui"

export default function(props){

	return (

		<Alert type="error" onCancel={()=>{alert("cancel")}} icon title="Title"><p>Some content</p></Alert>

	)

}