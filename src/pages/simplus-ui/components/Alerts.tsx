import * as React from "react"
import { Card, Alert, CodeDisplayer } from "@simplus/siui"
import { Table } from "antd"
import AlertBasic from "./components-explained/Alerts/AlertBasic"
import AlertIcon from "./components-explained/Alerts/AlertIcon"
import AlertIconTitle from "./components-explained/Alerts/AlertIconTitle"
import AlertCancelable from "./components-explained/Alerts/AlertCancelable"


export default function(props){

	return(
		<div>
			<h1 className="component-title">Alerts</h1>
				<div className="si-definition">
					<p>Information shower</p>
				</div>

			<h2>Usage</h2>
				<div className="si-usage">
					<p>Alert allows you to display a message to the user to inform about the status of an action performed. We have already provided some of the most commonly used alert types with the matching styles</p>
					{/* <p>Alert allows you to display a message to the user in order to inform him about the status of an action performed.</p> */}
				</div>

			<h2>Examples</h2>
				<div className="si-basic">
					<div className="si-basic-demo">	
						<AlertBasic />
					</div>
					<div className="si-basic-explained">
						<h3 className="header">Basic alert</h3>
						<CodeDisplayer title="Basic alert" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Alerts/AlertBasic.tsx"/>
					</div>
				</div>

				<div className="si-basic">
					<div className="si-basic-demo">	
						<AlertIcon />
					</div>
					<div className="si-basic-explained">
						<h3 className="header">Alert with icon</h3>
						<CodeDisplayer title="Alert with icon" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Alerts/AlertIcon.tsx"/>
					</div>
				</div>

				<div className="si-basic">
					<div className="si-basic-demo">	
						<AlertIconTitle />
					</div>
					<div className="si-basic-explained">
						<h3 className="header">Alert with icon and title</h3>
						<CodeDisplayer title="Alert with icon and title" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Alerts/AlertIconTitle.tsx"/>
					</div>
				</div>

				<div className="si-basic">
					<div className="si-basic-demo">	
						<AlertCancelable />
					</div>
					<div className="si-basic-explained">
						<h3 className="header">Cancelable alert with icon and title</h3>
						<CodeDisplayer title="Cancelable alert with icon and title" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Alerts/AlertCancelable.tsx"/>
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
				{prop : "className", type: "String", description : "class of the alert"},
				{prop : "style", type: "React.CSSProperties", description : "Style of the alert"},
				{prop : "icon", type : "Boolean", description : "Whether the alert has an icon or not"},
				{prop : "type", type : "String", description : "Type of th Alert : 'success'|'info'|'warning'|'error' "},
				{prop : "title", type : "String", description : "Title of the Alert"},
				{prop : "onCancel", type : "()=>void", description : "Action performed when the Alert is closed"},
			]}>

			</Table>
		</div>
	)

}