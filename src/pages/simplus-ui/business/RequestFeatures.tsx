import * as React from "react"
import {RequestFeature} from "@simplus/macaw-business"

export default function(props){

	return (
		<RequestFeature onPostIdea={()=>{alert("idea posted")}} onCancel={()=>{alert("canceled")}} />
	)

}