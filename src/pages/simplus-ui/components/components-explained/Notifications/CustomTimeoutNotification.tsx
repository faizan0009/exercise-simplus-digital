import * as React from "react"
import {Notification} from "@simplus/siui"


export default function(props){

	return ( 
		<Notification type="warning" timeout={10000} visible>Notification with a timeout of 10 sec and different type</Notification>
	)
}