import * as React from "react";
import {Input, CodeDisplayer, InputGroup} from "@simplus/siui"
import { Icon, Table } from "antd";
import BasicInput from "./components-explained/Inputs/BasicInputs"
import GroupInput from "./components-explained/Inputs/GroupInputs"
import SearchInput from "./components-explained/Inputs/SearchInput"

const Search = Input.SearchInput;

export default function(props) {
	return (
	<div>
		<h1 className="component-title">Input</h1>
            <div className="si-definition">
                <p>Input for any format</p>
            </div>

        <h2>Usage</h2>
            <div className="si-usage">
                <p>Input is a really usefull component every time the user needs to fill forms or just give some piece of information to the website.</p>
            </div>

        <h2>Examples</h2>

		<div className="si-basic">
			<div className="si-basic-demo">	
				<BasicInput/>
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Basic Input</h3>
				<CodeDisplayer title="Basic Input" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Inputs/BasicInputs.tsx"/>
			</div>
		</div>
		<div className="si-basic">
			<div className="si-basic-demo">	
				<GroupInput/>
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Group Inputs</h3>
				<CodeDisplayer title="Group Inputs" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Inputs/GroupInputs.tsx"/>
			</div>
		</div>
		<div className="si-basic">
			<div className="si-basic-demo">	
				<SearchInput/>
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Search Input</h3>
				<CodeDisplayer title="Search Input" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Inputs/SearchInput.tsx"/>
			</div>
		</div>
		
		
		<h2 className="component-documentation">Documentation</h2>
		<h3 className="component-documentation-item">Input</h3>
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
			{prop : "icon", type : "Boolean", description : "Icon as a hint"},
			{prop : "type", type : "string", description : "Type of the input"},
			{prop : "placeholder", type : "string", description : "Hint to fill the input"},
			{prop : "label", type : "string | JSX.Element | ((selected)=>ReactNode)", description : "Label displayed on top of selet"},
			{prop : "tooltip", type : "string | JSX.Element", description : "Shows icon for tip and hovering on it displays tooltip"},
			{prop : "onPressEnter", type : "()=>void", description : "function called when Enter pressed"},
			{prop : "compact", type : "boolean", description : "function called when Enter pressed"},
		]}>

		</Table>

		<h3 className="component-documentation-item">Input Group</h3>
		<Table
			pagination={false}
			columns={[
				{
					dataIndex : "prop",
					key : "prop",
					title : "Prop"
				},
				{
					dataIndex : "type",
					key : "type",
					title : "Type"
				},
				{
					dataIndex : "description",
					key : "description",
					title : "Description"
				}
			]} dataSource={[
			{prop : "compact", type: "boolean", description : "Wheter the inputs are put together or not"}
		]}>
		
		</Table>
	</div>
	)
}