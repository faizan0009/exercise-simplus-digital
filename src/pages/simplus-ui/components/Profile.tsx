import * as React from "react";
import {Profile, Card, CodeDisplayer} from "@simplus/siui"
import {Table} from "antd";
import ProfileRounded from "./components-explained/Profile/ProfileRounded"
import ProfileSquared from "./components-explained/Profile/ProfileSquared"

export default function(props){
	return <div>
		<h1 className="component-title">Profile</h1>

		<div className="si-definition">
			<p>Picture with a small description</p>
		</div>

        <h2>Usage</h2>
		<div className="si-usage">
			{/* <p>The profile component is made in order to diplay minimal information about the user.</p> */}
			<p>The profile component is neat way to diplay the basic information of the user.</p>
		</div>

        <h2>Examples</h2>

		<div className="si-basic">
			<div className="si-basic-demo" style={{ display:"flex", justifyContent : "space-around" }}>	
				<ProfileSquared/>
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Simple squared profile</h3>
				<CodeDisplayer title="Simple squared profile" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Profile/ProfileSquared.tsx"/>
			</div>
		</div>

		<div className="si-basic">
			<div className="si-basic-demo" style={{ display:"flex", justifyContent : "space-around" }}	>
				<ProfileRounded/>
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Simple rounded profile</h3>
				<CodeDisplayer title="Simple rounded profile" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Profile/ProfileRounded.tsx"/>
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
			{prop : "className", type: "String", description : "class of the picture"},
			{prop : "style", type: "React.CSSProperties", description : "Style of the card"},
			{prop : "picture", type : "PictureOwnProps", description : "picture of the profile"},
			{prop : "name", type : "string", description : "name of the profile"},
			{prop : "small", type : "Boolean", description : "Whether the profile is small or not"},
			{prop : "role", type : "string", description : "role of the person's profile"},
		]}>

		</Table>	
	</div>
}