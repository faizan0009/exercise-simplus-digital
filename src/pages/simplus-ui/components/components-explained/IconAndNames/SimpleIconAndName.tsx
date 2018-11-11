import * as React from "react";
import {IconAndName} from "@simplus/siui"
import { Icon } from "antd"

export default function(){

	return(
		<div className="icons-and-names">
			<IconAndName icon={<Icon type="user"/>} name="Martin Delobbe" />
			<IconAndName icon={<Icon type="mail"/>} name="test@simplusinnovation.com" />
			<IconAndName icon={<Icon type="phone"/>} name="+00000000" />
		</div>
	)

}