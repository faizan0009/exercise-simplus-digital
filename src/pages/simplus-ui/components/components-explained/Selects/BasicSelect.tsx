import * as React from "react"
import {Select} from "@simplus/siui"

const Option = Select.Option

export default function(props){

	return (
		<Select label={selected=>"Value: " + selected} tooltip="Simple Select" style={{width: 120}} placeholder="Select a value">
			<Option value="01" >
			<b>
				jack
			</b>
			</Option>
			<Option value="11">lucy</Option>
			<Option value="21" disabled >disabled</Option>
			<Option value="31" >yiminghe</Option>
		</Select>
	)

}