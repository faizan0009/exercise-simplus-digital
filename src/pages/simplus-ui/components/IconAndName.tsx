import * as React from "react"
import {IconAndName, CodeDisplayer} from "@simplus/siui"
import {Icon, Table} from "antd";

export default function(){

	return (
		<div>
		<h1 className="component-title">Icon And Name</h1>
		<div className="si-definition">
			<p>Provide both icon and name option</p>
		</div>

		<h2>Usage</h2>
			<div className="si-usage">
				<p>Icon and Name is a simple tiny component that allows you to put an icon next to a name for a very elegant look. </p>
			</div>

		<h2>Examples</h2>
		<div className="si-basic">
			<div className="si-basic-demo">
				<div className="icons-and-names">
					<IconAndName icon={<Icon type="user"/>} name="Martin Delobbe" />
					<IconAndName icon={<Icon type="mail"/>} name="test@simplusinnovation.com" />
					<IconAndName icon={<Icon type="phone"/>} name="+00000000" />
				</div>	
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Icon and name</h3>
				<CodeDisplayer title="Icon and name" language="jsx" src="/src/pages/simplus-ui/components/components-explained/IconAndNames/SimpleIconAndName.tsx"/>
			</div>
		</div>
		<h2 className="component-documentation">Documentation</h2>
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
			{prop : "className", type: "String", description : "class of the component"},
			{prop : "icon", type: "JSX.Element", description : "Icon of the component"},
			{prop : "name", type: "String", description : "Text of the component"},
			{prop : "style", type : "React.CSSProperties", description : "Style of the component"},
		]}>

		</Table>	

	</div>

	)

}