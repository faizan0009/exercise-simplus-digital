import * as React from "react";
import { Card } from "@simplus/siui"
import { Icon } from "antd";

export default function(props){

	return (
		<Card title = "Hello" padding margin actions={[
			<Icon onClick={() => alert("Shared")} type="share-alt" style={{ paddingRight : 10, fontSize : 20 } }></Icon>,
			<Icon  onClick={() => alert("Downloaded")} type="download"  style={{ paddingRight : 10, fontSize : 20 }}></Icon>]} >
			Card with title and icons
		</Card>
	)

}