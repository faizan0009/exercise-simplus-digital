import * as React from "react";
import {Icon, Table} from "antd";
import {SubLeftMenu, LeftMenuWrapper, Card, CodeDisplayer, Label} from "@simplus/siui"
import BasicSubLeftMenu from "./components-explained/SubLeftMenus/SimpleSubLeftMenu"
import IconSubLeftMenu from "./components-explained/SubLeftMenus/IconSubLeftMenu"
import DisabledSubLeftMenu from "./components-explained/SubLeftMenus/DisabledSubLeftMenu"


const Item = SubLeftMenu.Item;
const ItemGroup = SubLeftMenu.ItemGroup;
const Group = SubLeftMenu.Group;
const Separator = SubLeftMenu.Separator;


export default function (props){
	return (
		<div>
			<h1 className="component-title">SubLeft Menu</h1>
			<div className="si-definition">
                {/* <p>Sub menu from another one</p> */}
                <p>Sub menu</p>
            </div>

			<h2>Usage</h2>
				<div className="si-usage">
					<p>The sub left menu is useful when navigation can be divided into subgroups. It helps users to navigation to subsections as well.</p>
					{/* <p>The sub left menu is a usefull menu to display some navigation. It helps users to jump from one section to another.</p> */}
				</div>

			<h2>Examples</h2>
			<div className="si-basic">
				<div className="si-basic-demo">	
					<BasicSubLeftMenu/>
				</div>
				<div className="si-basic-explained">
					<h3 className="header">Collapsed SubLeft Menu</h3>
					<CodeDisplayer title="Basic SubLeft Menu" language="jsx" src="/src/pages/simplus-ui/components/components-explained/SubLeftMenus/SimpleSubLeftMenu.tsx"/>
				</div>
			</div>
			<div className="si-basic">
				<div className="si-basic-demo">	
					<IconSubLeftMenu/>
				</div>
				<div className="si-basic-explained">
					<h3 className="header">Expanded SubLeft Menu</h3>
					<CodeDisplayer title="Expanded SubLeft Menu" language="jsx" src="/src/pages/simplus-ui/components/components-explained/SubLeftMenus/IconSubLeftMenu.tsx"/>
				</div>
			</div>
			<div className="si-basic">
				<div className="si-basic-demo">	
					<DisabledSubLeftMenu/>
				</div>
				<div className="si-basic-explained">
					<h3 className="header">SubLeft Menu with Separator</h3>
					<CodeDisplayer title="SubLeft Menu with Separator" language="jsx" src="/src/pages/simplus-ui/components/components-explained/SubLeftMenus/DisabledSubLeftMenu.tsx"/>
				</div>
			</div>
			<h2 className="component-documentation">Documentation</h2>
			<h3 className="component-documentation-item">SubLeftMenuItem</h3>
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
					{prop : "style", type: "React.CSSProperties", description : "Style of the sub left menu"},
					{prop : "icon", type : "JSX.Element", description : "Icon on the left of the item"},
					{prop : "disabled", type : "Boolean", description : "Whether the item is disabled or not"},
					{prop : "isActive", type : "Boolean", description : "Whether the item is active or not"},
					{prop : "label", type : "JSX.Element", description : "Label on the item"},
					{prop : "noLink", type : "Boolean", description : "Whether the item is a link or not"},
					{prop : "onCLick", type : "() => void", description : "CLick action when click on item"},
				]}>

			</Table>	
			<h3 className="component-documentation-item">SubLeftMenuItemGroup</h3>
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
					{prop : "style", type: "React.CSSProperties", description : "Style of the sub left menu"},
					{prop : "title", type : "String", description : "Icon on the left of the item"},
					{prop : "label", type : "JSX.Element", description : "Label on the item"}
				]}>

			</Table>	
			<h3 className="component-documentation-item">SubLeftMenuGroup</h3>
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
					{prop : "style", type: "React.CSSProperties", description : "Style of the sub left menu"},
					{prop : "collapse", type : "Boolean", description : "Whether the menu collapse or not"},
					{prop : "label", type : "JSX.Element", description : "Label on the item"}
				]}>

			</Table>
			<h3 className="component-documentation-item">SubLeftMenu</h3>
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
					{prop : "style", type: "React.CSSProperties", description : "Style of the sub left menu"}
				]}>

			</Table>
		</div>
	)
}