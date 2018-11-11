import * as React from "react"
import { CodeDisplayer} from "@simplus/siui"
import { Table } from "antd"
import BasicSelect from "./components-explained/Selects/BasicSelect"
import ComboboxSelect from "./components-explained/Selects/ComboboxSelect"

export default function(props){

	return(
		<div>
		<h1 className="component-title">Selects</h1>
		<div className="si-definition">
			<p>Select box</p>
		</div>

		<h2>Usage</h2>
		<div className="si-usage">
			<p>Select allows the user to chose between some predetermined options.</p>
		</div>

		<h2>Examples</h2>
		<div className="si-basic">
			<div className="si-basic-demo">
				<BasicSelect/>
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Basic select</h3>
				<CodeDisplayer title="Basic select" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Selects/BasicSelect.tsx"/>
			</div>
		</div>
		<div className="si-basic">
			<div className="si-basic-demo">	
				<ComboboxSelect/>
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Combobox select</h3>
				<CodeDisplayer title="Combobox select" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Selects/ComboboxSelect.tsx"/>
			</div>
		</div>
		
		<h2 className="component-documentation">Documentation</h2>
		<h3 className="component-documentation-item">Select</h3>
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
			{prop : "prefixCls", type : "string", description : "prefix of the class"},
			{prop : "allowClear", type : "boolean", description : "Show clear button"},
			{prop : "label", type : "string | JSX.Element | ((selected)=>ReactNode)", description : "Label displayed on top of selet"},
			{prop : "tooltip", type : "string | JSX.Element", description : "Shows icon for tip and hovering on it displays tooltip"},
			{prop : "optionLabelProp", type : "String", description : "Which prop value of option will render as content of select"},
			{prop : "optionFilterProp", type : "String", description : "Which prop value of option will be used for filter if filterOption is true"},
			{prop : "mode", type : "String", description : "Select mode used : 'multiple' | 'tags' | 'combobox'"},
		]}>

		</Table>
		<h3 className="component-documentation-item">Option</h3>
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
			{prop : "disabled", type: "Boolean", description : "Whether the option is disabled or not"},
			{prop : "title", type: "String", description : "Title of the option"},
			{prop : "value", type : "String", description : "Default to filter with this property"},
			{prop : "key", type : "String", description : "Same usage as key"},
		]}>

		</Table>
	</div>
	)
	
}
