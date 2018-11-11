import * as React from "react";
import { Switch, Card, CodeDisplayer} from "@simplus/siui"
import {Table} from "antd";
import BasicSlider from "./components-explained/Slider/BasicSlider"

export default function(props){
	return (
		<div>
			<h1 className="component-title">Slider</h1>
x
			<div className="si-definition">
				<p>Slider to display current value or a range</p>
			</div>

			<h2>Usage</h2>
				<div className="si-usage">
					<p>Input single value or a range</p>
				</div>

			<h2>Examples</h2>

			<div className="si-basic">
				<div className="si-basic-demo">	
					<div className="si-modal-container"><BasicSlider /></div>
				</div>
				<div className="si-basic-explained">
					<h3 className="header">Simple Slider</h3>
					<CodeDisplayer title="Simple Slider" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Slider/BasicSlider.tsx"/>
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
			{prop : "defaultValue", type : "number|number[]", description : "The default value of slider. When range is false, use number, otherwise, use [number, number]"},
			{prop : "disabled", type : "boolean", description : "If true, the slider will not be interactable."},
			{prop : "dots", type : "boolean", description : "Whether the thumb can drag over tick only."},
			{prop : "max", type : "number", description : "The maximum value the slider can slide to"},
			{prop : "min", type : "number", description : "The minimum value the slider can slide to."},
			{prop : "range", type : "boolean", description : "dual thumb mode"},
			{prop : "step", type : "number|null", description : "The granularity the slider can step through values. Must greater than 0, and be divided by (max - min) . When marks no null, step can be null"},
			{prop : "tipFormatter	", type : "boolean", description : "Slider will pass its value to tipFormatter, and display its value in Tooltip, and hide Tooltip when return value is null."},
			{prop : "value", type : "number|number[]", description : "The value of slider. When range is false, use number, otherwise, use [number, number]"},
			{prop : "vertical", type : "boolean", description : "If true, the slider will be vertical."},
			{prop : "onAfterChange	", type : "Function(value)", description : "Fire when onmouseup is fired."},
			{prop : "onChange", type : "Function(value)", description : "Callback function that is fired when the user changes the slider's value."},
		]}>

		</Table>
		</div>
	)
}