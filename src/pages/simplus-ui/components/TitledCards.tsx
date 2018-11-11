import * as React from "react";
import {Icon, Button, Table} from "antd";
import {TitledCard, TitledCardTest, Card, IconAndName, CodeDisplayer, JumboButton, ProfilePicture, ProfileOwnProps} from "@simplus/siui"
import ProfileDemo from "./components-explained/TitledCards/ProfileTitledCard"
import DeletableDemo from "./components-explained/TitledCards/DeletableCustomTitledCard"
import BasicDemo from "./components-explained/TitledCards/BasicTitledCard"
import BasicTitledCardBis from "./components-explained/TitledCards/BasicTitledCardBis"
import ProfileTitledCardBis from "./components-explained/TitledCards/ProfileTitledCardBis"

export default function(props){
	return <div>
		<h1 className="component-title">Titled Cards</h1>
			<div className="si-definition">
				<p>Rectangular container with customized header</p>
			</div>

		<h2>Usage</h2>
			<div className="si-usage">
				<p>This is a customized component which can be useful in multiple scenarios as shown in the examples below.</p>
				{/* <p>These kind of cards can be used to illustrate or display data in a better way.</p> */}
			</div>

		<h2>Examples</h2>

			<div className="si-basic">
				<div className="si-basic-demo">	
					<BasicDemo/>
				</div>
				<div className="si-basic-explained">
					<h3 className="header">Basic Titled Card</h3>
					<CodeDisplayer title="Basic Titled Card" language="jsx" src="/src/pages/simplus-ui/components/components-explained/TitledCards/BasicTitledCard.tsx"/>
				</div>
			</div>
			<div className="si-basic">
				<div className="si-basic-demo">	
					<DeletableDemo/>
				</div>
				<div className="si-basic-explained">
					<h3 className="header">Deletable card with custom style</h3>
					<CodeDisplayer title="Basic Titled Card with custom components" language="jsx" src="/src/pages/simplus-ui/components/components-explained/TitledCards/DeletableCustomTitledCard.tsx"/>
				</div>
			</div>
			<div className="si-basic">
				<div className="si-basic-demo">	
					<ProfileDemo/>
				</div>
				<div className="si-basic-explained">
					<h3 className="header">Card with picture and title style</h3>
					<CodeDisplayer title="Basic Card" language="jsx" src="/src/pages/simplus-ui/components/components-explained/TitledCards/ProfileTitledCard.tsx"/>
				</div>
			</div>

			{/* <h3 className="component-documentation-item">Comment</h3>
			<p>The following Titled Cards are more intuitive from a dev perspective</p>

			<div className="si-basic">
				<div className="si-basic-demo">	
					<BasicTitledCardBis/>
				</div>
				<div className="si-basic-explained">
					<h3 className="header">Basic Titled Card Bis</h3>
					<CodeDisplayer title="Basic Titled Card Bis" language="jsx" src="/src/pages/simplus-ui/components/components-explained/TitledCards/BasicTitledCardBis.tsx"/>
				</div>
			</div>
			<div className="si-basic">
				<div className="si-basic-demo">	
					<ProfileTitledCardBis/>
				</div>
				<div className="si-basic-explained">
					<h3 className="header">Profile Card Bis</h3>
					<CodeDisplayer title="Profile Card Bis" language="jsx" src="/src/pages/simplus-ui/components/components-explained/TitledCards/ProfileTitledCardBis.tsx"/>
				</div>
			</div> */}

		<h2 className="component-documentation">Documentation</h2>
		<h3 className="component-documentation-item">TitledCards</h3>
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
			{prop : "title", type: "String|JSX.Element", description : "The title of the card"},
			{prop : "titleStyle", type: "React.CSSProperties", description : "Style of the title"},
			{prop : "picture", type : "String", description : "A picture for profile cards for example"},
			{prop : "onClose", type : "() => void", description : "Close action if the card is deletable"},
			{prop : "rounded", type : "Boolean", description : "Whether the card has rounded borders or not"},
			{prop : "style", type : "React.CSSProperties", description : "Style of the card"},
			{prop : "className", type : "String", description : "class of the card"},
		]}>

		</Table>
		{/* <h3 className="component-documentation-item">TitledCards Bis</h3>
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
			{prop : "header", type: "String|JSX.Element", description : "The header of the card"},
			{prop : "titleStyle", type: "React.CSSProperties", description : "Style of the title"},
			{prop : "picture", type : "any", description : "A picture for profile cards for instance"},
			{prop : "onClose", type : "() => void", description : "Close action if the card is deletable"},
			{prop : "rounded", type : "Boolean", description : "Whether the card has rounded borders or not"},
			{prop : "style", type : "React.CSSProperties", description : "Style of the card"},
			{prop : "className", type : "String", description : "class of the card"},
		]}>

		</Table> */}

	</div>

}