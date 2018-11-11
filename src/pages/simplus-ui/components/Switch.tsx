import * as React from "react";
import { Switch, Card, CodeDisplayer} from "@simplus/siui"
import {Table} from "antd"
import BasicSwitch from "./components-explained/Switch/BasicSwitch"

export default function(props){

	var visible : boolean;
	function onChange(checked) {
		console.log(`switch to ${checked}`);
	  }
	return (
		<div>
			<h1 className="component-title">Switch</h1>

			<div className="si-definition">
				<p>Simple switch for enable/disable options</p>
			</div>

			<h2>Usage</h2>
				<div className="si-usage">
					<p>Simple switch for enable/disable options</p>
				</div>

			<h2>Examples</h2>

			<div className="si-basic">
				<div className="si-basic-demo">	
					<div className="si-modal-container"><BasicSwitch /></div>
				</div>
				<div className="si-basic-explained">
					<h3 className="header">Simple Switch</h3>
					<CodeDisplayer title="Simple Switch" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Switch/BasicSwitch.tsx"/>
				</div>
			</div>

			<h2 className="component-documentation">Documentation</h2>
		<h3 className="component-documentation-item">Slider</h3>
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
			{prop : "className", type: "String", description : "class of the input"},
			{prop : "style", type: "React.CSSProperties", description : "Style of the input"},
			{prop : "label", type : "string | JSX.Element | ((selected)=>ReactNode)", description : "Label displayed on top of selet"},
			{prop : "tooltip", type : "string | JSX.Element", description : "Shows icon for tip and hovering on it displays tooltip"},
			{prop : "autoFocus", type : "boolean", description : "get focus when component mounted"},
			{prop : "checked", type : "boolean", description : "determine whether the Switch is checked"},
			{prop : "disabled", type : "boolean", description : "If true, the slider will not be interactable."},
			{prop : "checkedChildren", type : "string|ReactNode", description : "content to be shown when the state is checked"},
			{prop : "unCheckedChildren", type : "string|ReactNode", description : "content to be shown when the state is unchecked"},
			{prop : "defaultChecked", type : "boolean", description : "to set the initial state"},
			{prop : "loading", type : "boolean", description : "loading state of switch"},
			{prop : "size", type : "string", description : "the size of the Switch, options: default small	"},
			{prop : "onChange", type : "Function(checked:boolean)", description : "Callback function that is fired when the user changes the switch value."},
		]}>

		</Table>
		</div>
	)
}