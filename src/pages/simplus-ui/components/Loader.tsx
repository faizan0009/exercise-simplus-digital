import * as React from "react";
import {Card, CodeDisplayer} from "@simplus/siui"
import Loader from "./components-explained/Loader/Loader"
import ErrorLoading from "./components-explained/Loader/ErrorLoading"
import { Table } from "antd"

export default function(props) {
	return (
	<div>
		<h1 className="component-title">Loader</h1>
            <div className="si-definition">
                <p>Regular button</p>
            </div>

        <h2>Usage</h2>
            <div className="si-usage">
                <p>This is a regular button which can be customized as per need.</p>
            </div>

        <h2>Examples</h2>

		<div className="si-basic">
			<div className="si-basic-demo" style={{display:"flex", alignItems:"center", justifyContent:"center", padding:"1rem 0"}}>	
				<div style={{marginRight:"1rem"}}><Loader/></div>	
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Simple Loader</h3>
				<CodeDisplayer title="Loader" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Loader/Loader.tsx"/>
			</div>
		</div>

		<div className="si-basic">
			<div className="si-basic-demo" style={{display:"flex", alignItems:"center", justifyContent:"center", padding:"1rem 0"}}>	
			<div style={{marginRight:"1rem"}}><ErrorLoading/></div>	
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Error during loading</h3>
				<CodeDisplayer title="Loading Error" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Loader/ErrorLoading.tsx"/>
			</div>
		</div>

		<h2 className="component-documentation">Documentation</h2>
		<h3>Button</h3>
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
				{prop : "className", type: "string", description : "Class of the component"},
				{prop : "style", type : "React.CSSProperties", description : "Style options for the component"},
				{prop : "loadImage", type : "string", description : "Path of custom loading Image"},
				{prop : "height", type : "number", description : "Height of loader"},
				{prop : "error", type : "boolean", description : "To display error if loading fails"},
				{prop : "backgroundColor", type : "string", description : "Name of background color when loading"},
				{prop : "opacity", type : "number", description : "Opacity of background when loading"}
			]}>

		</Table>
	</div>
	)
}