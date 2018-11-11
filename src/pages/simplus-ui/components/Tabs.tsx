import * as React from "react";
import { Card, Tabs, TabPane, CodeDisplayer } from "@simplus/siui"
import { Button, Table } from "antd";
import SimpleTab from "./components-explained/Tabs/SimpleTab"
import LargeTabs from "./components-explained/Tabs/LargeTabs"
import CardTabs from "./components-explained/Tabs/CardTabs"
import EventTabs from "./components-explained/Tabs/EventTabs"




export default function(props){
	
	return (

		<div>
        <h1 className="component-title">Tabs</h1>

        <div className="si-definition">
                <p>Tabs to display content of different sections</p>
            </div>

        <h2>Usage</h2>
            <div className="si-usage">
                <p>Tabs can be very useful when you want to display a lot of structured content on the same page.</p>
                {/* <p>Tabs can be very usefull when you want to display a lot of structured content on the same page.</p> */}
            </div>

        <h2>Examples</h2>

		<div className="si-basic">
			<div className="si-basic-demo">	
				<SimpleTab/>
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Simple Tabs</h3>
				<CodeDisplayer title="Simple Tabs" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Tabs/SimpleTab.tsx"/>
			</div>
		</div>
		<div className="si-basic">
			<div className="si-basic-demo">	
				<LargeTabs/>
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Tabs Fill Container</h3>
				<CodeDisplayer title="Tabs Fill Container" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Tabs/LargeTabs.tsx"/>
			</div>
		</div>
		<div className="si-basic">
			<div className="si-basic-demo">	
				<EventTabs/>
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Tabs can be changed by external events</h3>
				<CodeDisplayer title="Simple Tabs" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Tabs/EventTabs.tsx"/>
			</div>
		</div>
		<div className="si-basic">
			<div className="si-basic-demo">	
				<CardTabs/>
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Tabs inside a Card</h3>
				<CodeDisplayer title="Tabs inside a Card" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Tabs/CardTabs.tsx"/>
			</div>
		</div>
		<h2 className="component-documentation">Documentation</h2>
		<h3>Tabs</h3>
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
				{prop : "className", type: "String", description : "class of the Tabs"},
				{prop : "active", type : "((number)=>void)", description : "Returns which tab is active"},
				{prop : "flex", type : "boolean", description : "Whether tabs should expand to take whole width"},
				{prop : "selected", type : "number", description : "Selected tab used for external event"},
				{prop : "selectedDefault", type : "number", description : "Default selected tab"},
				{prop : "height", type : "number", description : "min height of the tab"},
				{prop : "style", type : "React.CSSProperties", description : "style of the tabs"},
				{prop : "fillContainer", type : "Boolean", description : "Whether the tabs fill the container or not"},
			]}>

		</Table>
    </div>);

}
