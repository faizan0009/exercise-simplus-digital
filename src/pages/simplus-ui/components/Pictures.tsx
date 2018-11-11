import * as React from "react";
import {ProfilePicture, Card, CodeDisplayer} from "@simplus/siui"
import {Table} from "antd";
import PictureRounded from "./components-explained/Pictures/PictureRounded"
import PictureRoundedLittle from "./components-explained/Pictures/PictureRoundedLittle"
import PictureSquare from "./components-explained/Pictures/PictureSquare"
import PictureSquareLittle from "./components-explained/Pictures/PictureSquareLittle"

export default function(props){
	return <div>
		<h1 className="component-title">Pictures</h1>

		 <div className="si-definition">
                <p>Simple way to display an image.</p>
            </div>

        <h2>Usage</h2>
            <div className="si-usage">
                <p>Pictures is a easy way to show images to the user. Whether you want to make it big or small, squared or rounded, Picture is the component for you.</p>
                {/* <p>Pictures is a easy way to show images to the user. Whether you want to make it big or small, squared or rounded, Picture is simple component.</p> */}
            </div>

        <h2>Examples</h2>

		<div className="si-basic">
			<div className="si-basic-demo">	
				<PictureSquare/>
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Simple squared picture</h3>
				<CodeDisplayer title="Simple picture squared" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Pictures/PictureSquare.tsx"/>
			</div>
		</div>

		{/* <div className="si-basic">
			<div className="si-basic-demo">	
				<PictureSquareLittle/>
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Little squared picture</h3>
				<CodeDisplayer title="Little picture squared" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Pictures/PictureSquareLittle.tsx"/>
			</div>
		</div> */}

		<div className="si-basic">
			<div className="si-basic-demo">	
				<PictureRounded/>
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Simple rounded picture</h3>
				<CodeDisplayer title="Simple rounded picture" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Pictures/PictureRounded.tsx"/>
			</div>
		</div>

		{/* <div className="si-basic">
			<div className="si-basic-demo">	
				<PictureRoundedLittle/>
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Little rounded picture</h3>
				<CodeDisplayer title="Little rounded picture" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Pictures/PictureRoundedLittle.tsx"/>
			</div>
		</div> */}
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
			{prop : "margin", type : "Boolean", description : "default margin of 1rem"},
			{prop : "outstand", type : "Boolean", description : "Whether the card has an outstand or not"},
			{prop : "rounded", type : "Boolean", description : "Whether the card has rounded borders or not"},
			{prop : "size", type : "number|string", description : "size of the picture"},
			{prop : "url", type : "string", description : "url of the picture "},
		]}>

		</Table>	
	</div>
}