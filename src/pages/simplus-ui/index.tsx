export * from "./components"
export * from "./getting-started"

import * as React from "react";
import {HashRouter as Router, Redirect, Switch, Route, NavLink} from "react-router-dom";
import {Card, CodeDisplayer, SubLeftMenu} from "@simplus/siui";

import GettingStartedPage from "./getting-started/GettingStarted"

import AffixPage from "./components/Affix"
import AlertPage from "./components/Alerts"
import AutoCompletePage from "./components/AutoComplete"
import CardDocPage from "./components/CardDoc"
import CardPage from "./components/Cards"
import DatePickerPage from "./components/DatePicker"
import IconAndNamePage from "./components/IconAndName"
import InputPage from "./components/Input"
import ButtonPage from "./components/Button"
import JumboButtonPage from "./components/JumboButton"
import LeftMenuPage from "./components/LeftMenu"
import TopMenuPage from "./components/TopMenu"
import MessagePage from "./components/Messages"
import ModalPage from "./components/Modals"
import LoaderPage from "./components/Loader"
import NotificationPage from "./components/Notifications"
import PicturesPage from "./components/Pictures"
import ProfilePage from "./components/Profile"
import SelectPage from "./components/Selects"
import MultiSelectPage from "./components/MultipleSelect"
import SliderPage from "./components/Slider"
import SubLeftMenuPage from "./components/SubLeftMenu"
import SwitchPage from "./components/Switch"
import TablePage from "./components/Table"
import TabsPage from "./components/Tabs"
import TextPage from "./components/Text"
import TitledCardPage from "./components/TitledCards"

import FillLayoutPage from "./business/FillLayout"
import TableCardComboLayoutPage from "./business/TableCardComboLayout"
import LayoutStructuresPage from "./business/LayoutStructures"
import DownloadModalPage from "./business/PageDownloadModal"
import ShareModalPage from "./business/PageShareModal"
import LoginPage from "./business/PageLogin"
import PasswordRenewedPage from "./business/PagePasswordRenewed"
import InvalidTokenPage from "./business/PageInvalidToken"
import PasswordRequestSendPage from "./business/PagePasswordRequestSend"
import RenewPasswordPage from "./business/PageRenewPassword"
import ForgotPasswordPage from "./business/PageForgotPassword"
import RequestFeaturesPage from "./business/RequestFeatures"


export class SimplusUI extends React.Component<any, any>{

	constructor(props){
		super(props)
		this.state = {
			collapse : true,
			collapseFeatures : false
		}
		this.onResize = this.onResize.bind(this)
		this.onCollapse = this.onCollapse.bind(this)
		this.onCollapseFeatures = this.onCollapseFeatures.bind(this)
		this.onClick = this.onClick.bind(this)
	}
	
	componentDidMount(){
		window.addEventListener("resize", this.onResize)
		
	}

	onResize(){
		if(window.innerWidth < 1099 && this.state.collapse){
			this.setState({
				collapse : false
			})
		} else if(window.innerWidth > 1099 && !this.state.collapse) {
			this.setState({
				collapse : true
			})
		}
	}

	onCollapse(){
		this.setState({
			collapse : !this.state.collapse
		})
	}

	onCollapseFeatures(){
		this.setState({
			collapseFeatures : !this.state.collapseFeatures
		})
	}

	onClick(){
		if(window.innerWidth < 1099){
			this.setState({
				collapse : false,
				collapseFeatures : false
			})
		}
	}



	render(){
		const Item = SubLeftMenu.Item;
		const ItemGroup = SubLeftMenu.ItemGroup;
		const Group = SubLeftMenu.Group;

		return (
			<div className="si-components-wrapper">
				<Card vMargin noShadow style={{ borderRadius : "0.5rem" }}>
					<div className="si-components">
						<div className="si-left-column">
							<SubLeftMenu>
								<NavLink activeClassName="active" to="/components/getting-started"><Group title="Getting started" style={{ marginLeft : "2rem" }} /></NavLink> 
								<Group title="Components" style={{ marginLeft : "2rem" }} collapse={this.state.collapse} onCollapse={this.onCollapse}>
									<ItemGroup title="General" style={{ marginLeft : "3.5rem" }}>
										<NavLink activeClassName="active" to="/components/button"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>Button</Item></NavLink> 
										<NavLink activeClassName="active" to="/components/loader"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>Loader</Item></NavLink> 
										<NavLink activeClassName="active" to="/components/slider"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>Slider</Item></NavLink> 
										<NavLink activeClassName="active" to="/components/switch"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>Switch</Item></NavLink> 
										<NavLink activeClassName="active" to="/components/jumbo-button"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>Jumbo Button</Item></NavLink> 
									</ItemGroup>
									<ItemGroup title="Navigation" style={{ marginLeft : "3.5rem" }}>
										<NavLink activeClassName="active" to="/components/affix"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>Affix</Item></NavLink> 
										<NavLink activeClassName="active" to="/components/top-menu"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>Top Menu</Item></NavLink> 
										<NavLink activeClassName="active" to="/components/left-menu"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>Left Menu</Item></NavLink> 
										<NavLink activeClassName="active" to="/components/sub-left-menu"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>Sub Left Menu</Item></NavLink> 
									</ItemGroup>
									<ItemGroup title="Data Displayer" style={{ marginLeft : "3.5rem" }}>
										<NavLink activeClassName="active" to="/components/card"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick} >Card</Item></NavLink> 
										{/* <NavLink activeClassName="active" to="/components/card-doc"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>Card Doc</Item></NavLink>  */}
										<NavLink activeClassName="active" to="/components/icon-and-name"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>Icon and Name</Item></NavLink> 
										<NavLink activeClassName="active" to="/components/picture"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>Picture</Item></NavLink> 
										<NavLink activeClassName="active" to="/components/profile"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>Profile</Item></NavLink> 
										<NavLink activeClassName="active" to="/components/tabs"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>Tabs</Item></NavLink> 
										{/* <NavLink activeClassName="active" to="/components/text"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>Text</Item></NavLink>  */}
										<NavLink activeClassName="active" to="/components/titled-card"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>Titled Card</Item></NavLink> 
										<NavLink activeClassName="active" to="/components/table"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>Table</Item></NavLink> 
									</ItemGroup>
									<ItemGroup title="Feedback" style={{ marginLeft : "3.5rem" }}>
										<NavLink activeClassName="active" to="/components/alert"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>Alert</Item></NavLink> 
										{/* <NavLink activeClassName="active" to="/components/message"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>Message</Item></NavLink>  */}
										<NavLink activeClassName="active" to="/components/modal"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>Modal</Item></NavLink> 
										<NavLink activeClassName="active" to="/components/notification"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>Notification</Item></NavLink> 
									</ItemGroup>
									<ItemGroup title="Data Entry" style={{ marginLeft : "3.5rem" }}>
										{/* <NavLink activeClassName="active" to="/components/auto-complete"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>AutoComplete</Item></NavLink>  */}
										<NavLink activeClassName="active" to="/components/date-picker"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>DatePicker</Item></NavLink> 
										<NavLink activeClassName="active" to="/components/input"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>Input</Item></NavLink> 
										<NavLink activeClassName="active" to="/components/select"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>Select</Item></NavLink> 
										<NavLink activeClassName="active" to="/components/multi-select"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>Multiple Select</Item></NavLink> 
									</ItemGroup>
								</Group>
								<Group title="Features" style={{ marginLeft : "2rem" }} onCollapse={this.onCollapseFeatures} collapse={this.state.collapseFeatures}>
									 <ItemGroup title="Layouts" style={{ marginLeft : "3.5rem" }}>
										<NavLink activeClassName="active" to="/components/table-card-combo-layout"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>Table Card Combo</Item></NavLink>
										<NavLink activeClassName="active" to="/components/layout-structures"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>Layout Structures</Item></NavLink> 
										{/* <NavLink activeClassName="active" to="/components/fill-layout"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>FillLayout</Item></NavLink>  */}
									</ItemGroup> 
									<ItemGroup title="Authentication" style={{ marginLeft : "3.5rem" }}>
										<NavLink activeClassName="active" to="/components/login"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>Login</Item></NavLink> 
										<NavLink activeClassName="active" to="/components/forgot-password"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>Forgot Password</Item></NavLink> 
										<NavLink activeClassName="active" to="/components/password-renewed"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>Password Renewed</Item></NavLink> 
										<NavLink activeClassName="active" to="/components/invalid-token"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>Invalid Token</Item></NavLink> 
										<NavLink activeClassName="active" to="/components/password-request-send"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>Password Request Send</Item></NavLink> 
										<NavLink activeClassName="active" to="/components/renew-password"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>Renew Password</Item></NavLink> 
									</ItemGroup>
									{/* <ItemGroup title="Data" style={{ marginLeft : "3.5rem" }}>
										<NavLink activeClassName="active" to="/components/download-modal"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>Download Modal</Item></NavLink> 
										<NavLink activeClassName="active" to="/components/share-modal"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>Share Modal</Item></NavLink> 
									</ItemGroup> */}
									<ItemGroup title="Various" style={{ marginLeft : "3.5rem" }}>
										<NavLink activeClassName="active" to="/components/request-feature"><Item style={{ marginLeft : "5rem" }} onClick={this.onClick}>Request Feature</Item></NavLink> 
									</ItemGroup>
								</Group>
							</SubLeftMenu>
						</div>
						<div className="si-right-column">
						<Switch>
							<Redirect exact from="/components" to="/components/getting-started"/>
							<Route path="/components/getting-started" component={GettingStartedPage}/>
							<Route path="/components/card" component={CardPage}/>
							<Route path="/components/date-picker" component={DatePickerPage}/>
							<Route path="/components/text" component={TextPage}/>
							<Route path="/components/tabs" component={TabsPage}/>
							<Route path="/components/titled-card" component={TitledCardPage}/>
							<Route path="/components/button" component={ButtonPage}/>
							<Route path="/components/jumbo-button" component={JumboButtonPage}/>
							<Route path="/components/picture" component={PicturesPage}/>
							<Route path="/components/profile" component={ProfilePage}/>
							<Route path="/components/top-menu" component={TopMenuPage}/>
							<Route path="/components/left-menu" component={LeftMenuPage}/>
							<Route path="/components/modal" component={ModalPage}/>
							<Route path="/components/affix" component={AffixPage}/>
							<Route path="/components/alert" component={AlertPage}/>
							<Route path="/components/notification" component={NotificationPage}/>
							<Route path="/components/message" component={MessagePage}/>
							<Route path="/components/loader" component={LoaderPage}/>
							<Route path="/components/sub-left-menu" component={SubLeftMenuPage}/>
							<Route path="/components/input" component={InputPage}/>
							<Route path="/components/card-doc" component={CardDocPage}/>
							<Route path="/components/table" component={TablePage}/>
							<Route path="/components/select" component={SelectPage}/>
							<Route path="/components/multi-select" component={MultiSelectPage}/>
							<Route path="/components/slider" component={SliderPage}/>
							<Route path="/components/switch" component={SwitchPage}/>
							<Route path="/components/auto-complete" component={AutoCompletePage}/>
							<Route path="/components/icon-and-name" component={IconAndNamePage}/>
							<Route path="/components/forgot-password" component={ForgotPasswordPage}/>
							<Route path="/components/password-renewed" component={PasswordRenewedPage}/>
							<Route path="/components/password-request-send" component={PasswordRequestSendPage}/>
							<Route path="/components/renew-password" component={RenewPasswordPage}/>
							<Route path="/components/invalid-token" component={InvalidTokenPage}/>
							<Route path="/components/fill-layout" component={FillLayoutPage}/>
							<Route path="/components/table-card-combo-layout" component={TableCardComboLayoutPage}/>
							<Route path="/components/layout-structures" component={LayoutStructuresPage}/>
							<Route path="/components/login" component={LoginPage}/>
							<Route path="/components/share-modal" component={ShareModalPage}/>
							<Route path="/components/download-modal" component={DownloadModalPage}/>
							<Route path="/components/request-feature" component={RequestFeaturesPage}/>
						</Switch>
						</div>
					</div>
				</Card>
			</div>
		)
			

	}

}

export default SimplusUI;