import * as React from "react";
import {Icon, Input, Table} from "antd";
import {LeftMenu, LeftMenuWrapper, Card, HorizontalNavBar, HorizontalNavBarWrapper, CodeDisplayer} from "@simplus/siui"

const Item = LeftMenu.Item;
const Separator = LeftMenu.Separator;

export default function (props){

	


	const menu = <LeftMenu width={200}>
		<Item icon={<Icon type="area-chart" />}>Menu 1</Item>
		<Item icon={<Icon type="line-chart" />}>Menu 2</Item>
		<Item icon={<Icon type="setting" />}>Menu 3</Item>
		<Separator/>
		<Item icon={<Icon type="area-chart" />}>Menu 1</Item>
		<Item icon={<Icon type="line-chart" />}>Menu 2</Item>
		<Item icon={<Icon type="setting" />}>Menu 3</Item>
	</LeftMenu>
	const menu2 = <LeftMenu collapse={true} width={200}>
		<Item icon={<Icon type="area-chart" />}>Menu 1</Item>
		<Item icon={<Icon type="line-chart" />}>Menu 2</Item>
		<Item icon={<Icon type="setting" />}>Menu 3</Item>
		<Separator/>
		<Item icon={<Icon type="area-chart" />}>Menu 1</Item>
		<Item icon={<Icon type="line-chart" />}>Menu 2</Item>
		<Item icon={<Icon type="setting" />}>Menu 3</Item>
	</LeftMenu>


	return (

		<div>


		<h1 className="component-title">Left Menu</h1>

		<div className="si-definition">
			{/* <p>Menu list of navigation</p> */}
			<p>Left menu for navigation</p>
		</div>

        <h2>Usage</h2>
		<div className="si-usage">
			{/* <p>The left menu can be used as wrapper to display data inside. It is elegant and can collapse to minimise the space used. Simplus Innovation uses it for most of its apps so its a safe bet !</p> */}
			<p>The left menu can be used as wrapper for navigation. It is elegant and can collapse to minimise the space used. Simplus Innovation uses it for most of its apps so its a safe bet !</p>
		</div>

        <h2>Examples</h2>

		{/* <div className="si-basic">
			<div className="si-basic-demo" >	
				<div className="menu">
					<Card vMargin style={{ height : "40vh"}}>
						<LeftMenu hideCollapse>
							<Item icon={<Icon type="area-chart" />}>Menu 1</Item>
							<Item icon={<Icon type="line-chart" />}>Menu 2</Item>
							<Item icon={<Icon type="setting" />}>Menu 3</Item>
						</LeftMenu>
					</Card>
				</div>
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Simple top menu</h3>
				<CodeDisplayer title="Simple top menu" language="jsx" src="/src/pages/simplus-ui/components/components-explained/LeftMenus/LeftMenuTop.tsx"/>
			</div>
		</div>  */}

		 <div className="si-basic">
			<div className="si-basic-demo" >	
				<div className="menu">
					<Card vMargin >
						{menu}
					</Card>
				</div>
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Simple left menu</h3>
				<CodeDisplayer title="Simple squared profile" language="jsx" src="/src/pages/simplus-ui/components/components-explained/LeftMenus/LeftMenu.tsx"/>
			</div>
		</div>

		{/*<div className="si-basic">
			<div className="si-basic-demo" >	
				<div className="menu">
					<Card vMargin >
						<LeftMenuWrapper menu={menu}>
							<HorizontalNavBar>
								<HorizontalNavBar.Item>Test 1</HorizontalNavBar.Item>
								<HorizontalNavBar.Item>Test 2</HorizontalNavBar.Item>
							</HorizontalNavBar>
							<h1>Test 1</h1>
							<h1>Test 2</h1>
							<h1>Test 3</h1>
							<h1>Test 4</h1>
							<h1>Test 5</h1>
							<h1>Test 6</h1>
							<h1>Test 7</h1>
						</LeftMenuWrapper>
					</Card>
				</div>
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Left and top menu</h3>
				<CodeDisplayer title="Left and top menu" language="jsx" src="/src/pages/simplus-ui/components/components-explained/LeftMenus/LeftMenuAndTop.tsx"/>
			</div>
		</div>

		<div className="si-basic">
			<div className="si-basic-demo" >	
				<div className="menu">
					<Card vMargin >
						<HorizontalNavBarWrapper menu={<HorizontalNavBar>
									<HorizontalNavBar.Item>Test 1</HorizontalNavBar.Item>
									<HorizontalNavBar.Item>Test 2</HorizontalNavBar.Item>
								</HorizontalNavBar>}>
							<LeftMenuWrapper menu={menu}>
								<HorizontalNavBar>
									<HorizontalNavBar.Item>Test 1</HorizontalNavBar.Item>
									<HorizontalNavBar.Item>Test 2</HorizontalNavBar.Item>
								</HorizontalNavBar>
								<h1>Test 1</h1>
								<h1>Test 2</h1>
								<h1>Test 3</h1>
								<h1>Test 4</h1>
								<h1>Test 5</h1>
								<h1>Test 6</h1>
								<h1>Test 7</h1>
							</LeftMenuWrapper>
						</HorizontalNavBarWrapper>
					</Card>
				</div>
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Left and top menu with top tabs</h3>
				<CodeDisplayer title="Left and top menu with top tabs" language="jsx" src="/src/pages/simplus-ui/components/components-explained/LeftMenus/LeftMenuAndTopTop.tsx"/>
			</div>
		</div> */}

		<div className="si-basic">
			<div className="si-basic-demo" >	
				<div className="menu">
					<Card vMargin >
						<LeftMenuWrapper menu={menu2}>
							<HorizontalNavBar rightComponents={[
								<Icon type="share-alt" style={{ paddingRight : 10, fontSize : 20 } } className="icon"></Icon>,
								<Input placeholder="Basic usage" className="input"/>
							]} >
								<HorizontalNavBar.Item>Item 1</HorizontalNavBar.Item>
								<HorizontalNavBar.Item>Item 2</HorizontalNavBar.Item>
							</HorizontalNavBar>
							{/* <h1>Test 1</h1>
							<h1>Test 2</h1>
							<h1>Test 3</h1>
							<h1>Test 4</h1>
							<h1>Test 5</h1>
							<h1>Test 6</h1>
							<h1>Test 7</h1> */}
						</LeftMenuWrapper>
					</Card>
				</div>
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Left and top menu customized</h3>
				<CodeDisplayer title="Left and top menu customized" language="jsx" src="/src/pages/simplus-ui/components/components-explained/LeftMenus/LeftMenuAndTopCustomized.tsx"/>
			</div>
		</div>
			
		<h2 className="component-documentation">Documentation</h2>
		<h3 className="component-documentation-item">LeftMenu</h3>
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
				{prop : "header", type: "any", description : "Header of the left menu"},
				{prop : "collapse", type : "Boolean", description : "Whether the left menu collapse or not"},
				{prop : "width", type : "number", description : "Fixed width of the left menu"},
				{prop : "hideCollapse", type : "Boolean", description : "Whether the collapse menu is hidden or not"},
				{prop : "profile", type : "ProfileOwnProps", description : "Profile on the left menu"},
				{prop : "profilePopover", type : "string|JSX.Element", description : "text of the popover when hover the profile"},
				{prop : "rightStuff", type : "JSX.Element | JSX.Element[]", description : "Elements on the top right of the left menu"},
			]}>

		</Table>	
		<h3 className="component-documentation-item">Left Menu Wrapper</h3>
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
				{prop : "className", type: "String", description : "class of the sub left menu"},
				{prop : "icon", type : "JSX.Element", description : "Icon on the left of the item"},
				{prop : "isActive", type : "Boolean", description : "Whether the item is active or not"},
				{prop : "noLink", type : "Boolean", description : "Whether the item is a link or not"},
				{prop : "onCLick", type : "() => void", description : "CLick action when click on item"},
			]}>

		</Table>	
		<h3 className="component-documentation-item">Left Menu Item</h3>
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
				{prop : "menu", type: "JSX.Element", description : "class of the sub left menu"},
				{prop : "style", type : "React.CSSProperties", description : "Icon on the left of the item"},
				{prop : "flexContainer", type : "Boolean", description : "Whether the container is flex or not"},
			]}>

		</Table>	

			
		</div>
	)
		
}