import * as React from "react"
import { CodeDisplayer} from "@simplus/siui"
import { Table } from "antd"
import MultipleSelectBasic from "./components-explained/Selects/MultipleSelectBasic"
import MultipleSelectAsync from "./components-explained/Selects/MultipleSelectAsync"
import MultipleSelect from "./components-explained/Selects/MultipleSelect"

export default function(props){

	return(
		<div>
		<h1 className="component-title">Multiple Select</h1>
		<div className="si-definition">
			<p>Multiple Select </p>
		</div>

		<h2>Usage</h2>
		<div className="si-usage">
			<p>Customised multiple select which gives tons of useful features</p>
		</div>

		<h2>Examples</h2>
		<div className="si-basic">
			<div className="si-basic-demo">	
				<MultipleSelectBasic/>
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Multiple select with chips and callback label</h3>
				<CodeDisplayer title="Basic Multiple select" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Selects/MultipleSelectBasic.tsx"/>
			</div>
		</div>
		<div className="si-basic">
			<div className="si-basic-demo">	
				<MultipleSelectAsync/>
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Async Multiple select</h3>
				<CodeDisplayer title="Async Multiple select" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Selects/MultipleSelectAsync.tsx"/>
			</div>
		</div>
		<div className="si-basic">
			<div className="si-basic-demo">	
				<MultipleSelect/>
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Customisable Multiple select</h3>
				<CodeDisplayer title="Custom Multiple select" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Selects/MultipleSelect.tsx"/>
			</div>
		</div>
		
		<h2 className="component-documentation">Documentation</h2>
		<h3 className="component-documentation-item">MultiSelect</h3>
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
			{prop : "className", type: "String", description : "class of the select"},
			{prop : "style", type: "React.CSSProperties", description : "Style of the select"},
			{prop : "placeholder", type : "string", description : "Text dislpayed when no item is selected"},
			{prop : "allSelectedText", type : "String", description : "Text displayed when all items are selected"},
			{prop : "customSelectedText", type : "String", description : "Text when items are selected"},
			{prop : "borderless", type : "boolean", description : "Hides the border from select area"},
			{prop : "label", type : "string | JSX.Element | ((selected)=>ReactNode)", description : "Label displayed on top of selet"},
			{prop : "tags", type : "(selected)=>ReactNode", description : "Callback function for custom tags"},
			{prop : "tooltip", type : "string | JSX.Element", description : "Shows icon for tip and hovering on it displays tooltip"},
			{prop : "width", type : "number | string", description : "Width of component"},
			{prop : "matchWidth", type : "boolean", description : "Matches width of options area with the width of input area"},
			{prop : "loading", type : "boolean", description : "Shows loading icon when menu is opened"},
			{prop : "optionMenuWidth", type : "number | string", description : "Width of select area when menu is opened"},
			{prop : "optionMenuHeight", type : "number | string", description : "Height of select area when menu is opened"},
			{prop : "showItemsOnMenuClosed", type : "boolean", description : "Shows selected items instead of X items selected"},
			{prop : "defaultAllSelected", type : "boolean", description : "All items are selected by default"},
			{prop : "onChange", type : "(values)=>void", description : "Values is an object of selected items id and value arrays called when item is selected/deselected"},
			{prop : "onMenuClosed", type : "(values)=>void", description : "Values is an object of selected items id and value arrays called when menu is closed"},
			{prop : "onSearch", type : "(input)=>any", description : "Used for callback function along with loading"},
		]}>
		</Table>
		<h3 className="component-documentation-item">MultiSelectOption</h3>
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
			{prop : "className", type: "String", description : "class of the select"},
			{prop : "style", type: "React.CSSProperties", description : "Style of the select"},
			{prop : "value", type: "string|number", description : "Value of option which will be displayed when selected"},
			{prop : "disabled", type: "boolean", description : "Disables the option"},
			{prop : "defaultSelected", type: "boolean", description : "Option is select by default when component is loaded"},
		]}>
		</Table>
	</div>
	)
	
}
