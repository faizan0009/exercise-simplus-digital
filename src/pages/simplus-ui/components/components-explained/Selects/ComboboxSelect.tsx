import * as React from "react"
import {Select} from "@simplus/siui"

const Option = Select.Option

export default function(props){

	return (
		<Select
			label="Combobox"
			style={{width:150}}
			mode="combobox"
			>
				<Option value="jack" >
				<b>
					jack
				</b>
				</Option>
				<Option value="lucy">lucy</Option>
				<Option value="disabled" disabled >disabled</Option>
				<Option value="yiminghe" >yiminghe</Option>
		</Select>
		)

}