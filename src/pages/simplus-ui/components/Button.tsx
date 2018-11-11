import * as React from "react";
import {Card, Button, CodeDisplayer} from "@simplus/siui"
import { Table } from "antd"

export default function(props) {
	return (
	<div>
		<h1 className="component-title">Button</h1>
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
				<div style={{marginRight:"1rem"}}><Button size="small">Small</Button></div>
				<div style={{marginRight:"1rem"}}><Button>Regular</Button></div>
				<div style={{marginRight:"1rem"}}><Button size="large">Large</Button></div>
				<div style={{marginRight:"1rem"}}><Button size="jumbo">Jumbo</Button></div>		
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Default button</h3>
				<CodeDisplayer title="Default button" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Buttons/Button.tsx"/>
			</div>
		</div>

		<div className="si-basic">
			<div className="si-basic-demo" style={{display:"flex", alignItems:"center", justifyContent:"center", padding:"1rem 0"}}>	
				<div style={{marginRight:"1rem"}}><Button rounded size="small">Small</Button></div>
				<div style={{marginRight:"1rem"}}><Button rounded>Regular</Button></div>
				<div style={{marginRight:"1rem"}}><Button rounded size="large">Large</Button></div>
				<div style={{marginRight:"1rem"}}><Button rounded size="jumbo">Jumbo</Button></div>		
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Rounded button</h3>
				<CodeDisplayer title="Default button" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Buttons/ButtonRounded.tsx"/>
			</div>
		</div>

		<div className="si-basic">
			<div className="si-basic-demo" style={{display:"flex", alignItems:"center", justifyContent:"center", padding:"1rem 0"}}>	
			<div style={{marginRight:"1rem"}}><Button design="default">Default</Button></div>
				<div style={{marginRight:"1rem"}}><Button design="basic">Basic</Button></div>
				<div style={{marginRight:"1rem"}}><Button design="gradient">Gradient</Button></div>
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Designs</h3>
				<CodeDisplayer title="Designs" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Buttons/ButtonDesign.tsx"/>
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
				{prop : "color", type : "string", description : "Color of the Button"},
				{prop : "backgroundColor", type : "string", description : "Background color of the Button"},
				{prop : "gradientColor", type : "string", description : "Gradient color of the Button"},
				{prop : "design", type : "string", description : "default | basic | gradient"},
				{prop : "width", type : "number", description : "Width of the Button"},
				{prop : "height", type : "number", description : "Height of the Button"},
				{prop : "fluid", type : "Boolean", description : "Wheter the Buuton is fluid or not"},
				{prop : "size", type : "string", description : "small || regular || large || jumbo"},
				{prop : "style", type: "React.CSSProperties", description : "Style of the button"},
			]}>

		</Table>
	</div>
	)
}