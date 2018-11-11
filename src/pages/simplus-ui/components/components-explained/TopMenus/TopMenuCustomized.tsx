import * as React from "react";
import {Icon} from "antd";
import {Card, TopMenu, TopMenuItem, Search} from "@simplus/siui";

export default class TopMenuExample extends React.Component<any,any>{
	render(){
		const menu = 
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
				<TopMenuItem icon={<Icon type="bulb"/>} className="active" >Section 1</TopMenuItem>
				<TopMenuItem icon={<Icon type="rocket"/>}>Section 2</TopMenuItem>
				<TopMenuItem icon={<Icon type="star-o"/>}>Section 3</TopMenuItem>
			</TopMenu>
				
		return (
			<Card vMargin >
				{menu}
			</Card>
		)

	}

}