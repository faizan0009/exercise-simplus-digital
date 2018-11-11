import * as React from "react";
import { Card } from "@simplus/siui"
import {Icon} from "antd";

export default function(props){

	return (
		<Card flat loading title="Hello" padding margin actions={[
			<Icon onClick={() => alert("Shared")} type="share-alt"></Icon>,
			<Icon  onClick={() => alert("Downloaded")} type="download"></Icon>]} >
			Flat card
		</Card>
	)

}