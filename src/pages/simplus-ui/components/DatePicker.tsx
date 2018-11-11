import * as React from "react";
import {DatePicker, CodeDisplayer} from "@simplus/siui";
import { Icon, Table } from "antd";
import DatePickerExample from "./components-explained/DatePicker/DatePicker"



export default function(props) {
	return (
	<div>
		<h1 className="component-title">DatePicker</h1>
            <div className="si-definition">
                <p>Choose from predefined options or select a custom range</p>
            </div>

        <h2>Usage</h2>
            <div className="si-usage">
                <p>Datepicker provides a compact solution to your needs when you need to select data from a certain range. It provides few default options as well as custom options.</p>
            </div>

        <h2>Examples</h2>

		<div className="si-basic">
			<div className="si-basic-demo">	
				<DatePickerExample/>
			</div>
			<div className="si-basic-explained">
				<h3 className="header">DatePicker</h3>
				<CodeDisplayer title="DatePicker" language="jsx" src="/src/pages/simplus-ui/components/components-explained/DatePicker/DatePicker.tsx"/>
			</div>
		</div>
		
		<h2 className="component-documentation">Documentation</h2>
		<h3 className="component-documentation-item">DatePicker</h3>
		<Table 
		pagination={false}
		columns={[
			{
				dataIndex : "prop",
				key : "prop",
				title: "Prop"
			},
			{
				dataIndex : "type",
				key : "type",
				title: "Type"
			},
			{
				dataIndex : "description",
				key : "description",
				title : "Description"
			}
		]} dataSource={[
			{prop : "className", type: "String", description : "class of the datepicker"},
			{prop : "style", type: "React.CSSProperties", description : "Style of the datepicker"},
			{prop : "placeholder", type : "string", description : "Hint for datepicker"},
			{prop : "customOption", type : "boolean", description : "Allows user to pick a custom date range"},
			{prop : "defaultValue", type : "string", description : "Default value of datepicker"},
			{prop : "value", type : "string", description : "To set the value of datepicker through external variables"},
			{prop : "label", type : "string | JSX.Element | ((checked)=>React.ReactNode)", description : "Label for datepicker"},
			{prop : "tooltip", type : "string | JSX.Element", description : "Tooltip for additional hints"},
			{prop : "onChange", type : "(value)=>void", description : "function called when dates are changed"}
		]}>
		
		</Table>
	</div>
	)
}