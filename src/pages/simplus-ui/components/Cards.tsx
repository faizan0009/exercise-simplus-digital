import * as React from "react";
import {Icon, Table} from "antd";
import {Card, CodeDisplayer} from "@simplus/siui"
import BasicCard from "./components-explained/Cards/BasicCard";
import RoundedCard from "./components-explained/Cards/RoundedCard";
import CardTitle from "./components-explained/Cards/CardTitle";
import CardTitleNoPadding from "./components-explained/Cards/CardTitleNoPadding";
import CardTitleComponents from "./components-explained/Cards/CardTitleComponents";
import FlatCard from "./components-explained/Cards/FlatCard";
import LoadingCard from "./components-explained/Cards/LoadingCard";

export default function(props) {
	return (

		<div>
			<h1 className="component-title">Cards</h1>
			<div className="si-definition">
				<p>Rectangular container for data.</p>
			</div>

			<h2>Usage</h2>
			<div className="si-usage">
				<p>Cards are useful to display data in a very neat manner. It allows you to clearly delimitate contents so that the user won't be confused with data randomly diplayed. It is a very flexible component with lots of build in options as seen from example below</p>
				{/* <p>Cards are a usefull way to display data. It allows you to clearly delimitate contents so that the user won't be confused with data randomly diplayed.</p> */}
			</div>

			<h2>Examples</h2>
			<div className="si-basic">
				<div className="si-basic-demo">	
					<BasicCard />
				</div>
				<div className="si-basic-explained">
					<h3 className="header">Basic card</h3>
					<CodeDisplayer title="Basic Card" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Cards/BasicCard.tsx"/>
				</div>
			</div>

			<div className="si-basic">
				<div className="si-basic-demo">	
					<RoundedCard />
				</div>
				<div className="si-basic-explained">
					<h3 className="header">Basic card with margin and rounded borders</h3>
					<CodeDisplayer title="Basic Rounded Card" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Cards/RoundedCard.tsx"/>
				</div>
			</div>

			<div className="si-basic">
				<div className="si-basic-demo">	
					<CardTitle />
				</div>
				<div className="si-basic-explained">
					<h3 className="header">Card with title </h3>
					<CodeDisplayer title="Card with title" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Cards/CardTitle.tsx"/>
				</div>
			</div>

			{/* <div className="si-basic">
				<div className="si-basic-demo">	
					<CardTitleNoPadding />
				</div>
				<div className="si-basic-explained">
					<h3 className="header">Card with title and no padding</h3>
					<CodeDisplayer title="Card with title and no padding" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Cards/CardTitleNoPadding.tsx"/>
				</div>
			</div> */}


			<div className="si-basic">
				<div className="si-basic-demo">	
					<CardTitleComponents />
				</div>
				<div className="si-basic-explained">
					<h3 className="header">Card with title and items</h3>
					<CodeDisplayer title="Card with title and itemss" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Cards/CardTitleComponents.tsx"/>
				</div>
			</div>	
			<div className="si-basic">
				<div className="si-basic-demo">	
					<FlatCard />
				</div>
				<div className="si-basic-explained">
					<h3 className="header">Flat card</h3>
					<CodeDisplayer title="Card with title and itemss" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Cards/FlatCard.tsx"/>
				</div>
			</div>
			<div className="si-basic">
				<div className="si-basic-demo">	
					<LoadingCard />
				</div>
				<div className="si-basic-explained">
					<h3 className="header">Loading card</h3>
					<CodeDisplayer title="Card with title and itemss" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Cards/LoadingCard.tsx"/>
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
				{prop : "className", type: "String", description : "class of the card"},
				{prop : "title", type: "String|JSX.Element", description : "The title of the card"},
				{prop : "style", type: "React.CSSProperties", description : "Style of the card"},
				{prop : "rounded", type : "Boolean", description : "Whether the card has rounded borders or not"},
				{prop : "padding", type : "Boolean", description : "default padding of 1rem"},
				{prop : "margin", type : "Boolean", description : "default margin of 1rem"},
				{prop : "vMargin", type : "Boolean", description : "vertical margin of 1rem"},
				{prop : "hMargin", type : "Boolean", description : "horizontal margin of 1rem"},
				{prop : "noShadow", type : "Boolean", description : "Whether the card has a shadow or not"},
				{prop : "flat", type : "Boolean", description : "Whether the card is flat or not"},
				{prop : "actions", type : "JSX.Element[]", description : "Element attached on the card"},
				{prop : "loading", type : "Boolean", description : "Whether the card is loading or not"},
			]}>

			</Table>	
		</div>
	)
}