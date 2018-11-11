import * as React from "react";
import {Card, JumboButton, CodeDisplayer} from "@simplus/siui"
import { Table } from "antd"

export default function(props) {
	return (
	<div>
		<h1 className="component-title">Jumbo Button</h1>
            <div className="si-definition">
                <p>Big button</p>
            </div>

        <h2>Usage</h2>
            <div className="si-usage">
                <p>This Jumbo Button can be used as a regular button. It is a really visible button so even myopic people should see it.</p>
            </div>

        <h2>Examples</h2>

		<div className="si-basic">
			<div className="si-basic-demo">	
				<JumboButton design="default" >Push Me</JumboButton>
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Default jumbo button</h3>
				<CodeDisplayer title="Default jumbo button" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Buttons/JumboDefault.tsx"/>
			</div>
		</div>

		<div className="si-basic">
			<div className="si-basic-demo">	
				<JumboButton design="basic" width={300} >BASIC</JumboButton>
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Basic jumbo button</h3>
				<CodeDisplayer title="Basic jumbo button" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Buttons/JumboBasic.tsx"/>
			</div>
		</div>

		<h2 className="component-documentation">Documentation</h2>
		<h3>Jumbo Button</h3>
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
				{prop : "color", type : "string", description : "Color of the Jumbo Button"},
				{prop : "backgroundColor", type : "string", description : "Background color of the Jumbo Button"},
				{prop : "gradientColor", type : "string", description : "Gradient color of the Jumbo Button"},
				{prop : "design", type : "string", description : "default | basic | gradient"},
				{prop : "width", type : "number", description : "Width of the Jumbo Button"},
				{prop : "height", type : "number", description : "Height of the Jumbo Button"},
				{prop : "fluid", type : "Boolean", description : "Wheter the Jumbo Buuton is fluid or not"},
			]}>

		</Table>
	</div>
	)
}