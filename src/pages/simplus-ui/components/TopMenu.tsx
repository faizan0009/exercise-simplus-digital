import * as React from "react";
import {Icon, Input, Table} from "antd";
import { NavLink} from "react-router-dom";
import {Card, TopMenu, TopMenuItem, CodeDisplayer, Search} from "@simplus/siui";

export default class TopMenuExample extends React.Component<any,any>{
	constructor(props) {
        super(props);
        this.state = {
            activeClass: "1",
        };
	}

	render(){

	return (

		<div>


		<h1 className="component-title">Top Menu</h1>

		<div className="si-definition">
			<p>Top menu for navigation</p>
		</div>

        <h2>Usage</h2>
		<div className="si-usage">
			<p>Top menu provides a beautiful way to navigate throughout your application</p>
		</div>

        <h2>Examples</h2>

		{/* <div className="si-basic">
			<div className="si-basic-demo" >	
				<div className="menu">
					<Card vMargin >
						<TopMenu >
							<TopMenu.Item>Section 1</TopMenu.Item>
							<TopMenu.Item>Section 2</TopMenu.Item>
							<TopMenu.Item>Section 3</TopMenu.Item>
						</TopMenu>
					</Card>
				</div>	
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Simple Top menu</h3>
				<CodeDisplayer title="Simple Top menu" language="jsx" src="/src/components/components-explained/TopMenus/TopMenu.tsx"/>
			</div>
		</div> */}

		<div className="si-basic">
			<div className="si-basic-demo" >	
				<div className="menu">
					<Card vMargin >
						<TopMenu style={{height: "5rem"}}
							 picture={
								<div style={{margin:"auto"}}>
								<img src="/assets/Logo-02.png" width="25px" height="25px" style={{ marginTop: "1rem", marginBottom : "1rem", marginLeft:"1.5rem", marginRight:"1rem" }} className="si-logo"/>
								</div>
								}
								rightComponents={[
								<Search placeholder="Search" onSearch={ value =>alert("searched")}/>,
								<Icon type="bell" style={{ paddingRight : "1rem", paddingLeft: "1rem", fontSize : 20, color:"#FFF" } } className="icon"></Icon>,
								<Icon type="question" style={{ paddingRight : "1rem", fontSize : 20, color:"#FFF" } } className="icon"></Icon>,
								<Icon type="setting" style={{ paddingRight : "1rem", fontSize : 20, color:"#FFF" } } className="icon"></Icon>
								
							]} >
							<TopMenuItem icon={<Icon type="bulb"/>} onClick={() => this.setState({activeClass:"1"})} className={this.state.activeClass==="1" ? 'active': null}>Section 1</TopMenuItem>
							<TopMenuItem icon={<Icon type="rocket"/>} onClick={() =>  console.log("this works")} className={this.state.activeClass==="2" ? 'active': null}>Section 2</TopMenuItem>
							<TopMenuItem icon={<Icon type="star-o"/>} onClick={() =>  this.setState({activeClass:"3"})} className={this.state.activeClass==="3" ? 'active': null}>Section 3</TopMenuItem>
						</TopMenu>
					</Card>
				</div>	
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Top menu customized</h3>
				<CodeDisplayer title="Top menu customized" language="jsx" src="/src/pages/simplus-ui/components/components-explained/TopMenus/TopMenuCustomized.tsx"/>
			</div>
		</div>
			
		<h2 className="component-documentation">Documentation</h2>
		<h3 className="component-documentation-item">Top Menu</h3>
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
				{prop : "style", type: "React.CSSProperties", description : "Styling properties"},
				{prop : "picture", type : "JSX.Element", description : "Styling properties"},
				{prop : "selectedDefault", type : "number", description : "Default selected number"},
				{prop : "height", type : "number", description : "Height of the top menu"},
				{prop : "backgroundColor", type : "string", description : "Background color"},
				{prop : "className", type : "string", description : "Class of the menu"},
				{prop : "rightComponents", type : "JSX.Element | JSX.Element[]", description : "Components on the right side"},
			]}>

		</Table>	
		<h3 className="component-documentation-item">Top Menu Item</h3>
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
				{prop : "icon", type: "JSX.Element", description : "Icon to be displayed next to the name"},
				{prop : "onClick", type : "()=>void", description : "Callback function for onClick method"},
				{prop : "noLink", type : "boolean", description : "Select whether it is connected with a link or not"},
				{prop : "isActive", type : "boolean", description : "Select whether it is active or not"},
				{prop : "disabled", type : "string", description : "Select whether is is disabled or not"},
				{prop : "className", type : "boolean", description : "Class of the item"},
				{prop : "style", type : "React.CSSProperties", description : "Styling properties"},
			]}>

		</Table>	
			
		</div>
	)
}
}