import * as React from "react"
import * as ReactDOM from "react-dom"
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import {BrowserRouter as Router, Redirect, Switch, Route, Link, NavLink} from "react-router-dom";
import thunk from "redux-thunk";
import {Menu, Dropdown, Icon} from "antd"
import MediaQuery from "react-responsive"
import axios from "axios"

import "antd/dist/antd.less";
import "../style/index.less";
import "@simplus/siui/style/index.less";
import "@simplus/macaw-business/style/index.less";

import { LocaleProvider } from 'antd';
import * as enUS from 'antd/lib/locale-provider/en_US';

import {NavBar, Select, Button, Alert} from "@simplus/siui"
import SimplusUI from "./pages/simplus-ui"
import Mockup from "./pages/mockup/Mockup"
import Solutions from "./pages/solutions/Solutions"
import Home from "./pages/home/Home"
import Footer from "./pages/simplus-ui/components/Footer"
import Login from "./pages/Login/Login"
// import {Routes as LoginRoutes} from "./pages/login/Routes"

//import {auth} from "./robins"

const enhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	combineReducers({
		useless : (state = {}, action) => state
	}), enhancer(applyMiddleware(thunk)))

const NavBarItem = NavBar.Item;

export class Routes extends React.Component<any, any>{
	

	constructor(){
		super()
		this.state = {
			visible : true,
			link : '',
			data : ''
		}
		this.handleMenuClick = this.handleMenuClick.bind(this)
		this.handleVisibleChange = this.handleVisibleChange.bind(this)
	}
	async componentWillMount() {
		this.setState({data : JSON.parse(sessionStorage.getItem("googleData"))})
		if(!sessionStorage.getItem("googleData"))
		{
			this.authenticate().then((res) => {
				this.setState({link : res.data.greeting});
			})
		}
	}

	authenticate = () => new Promise((resolve, reject) => {
		axios({
			method: 'post',
			url: 'http://localhost:3002/api/v1/microservice/home',
			data: {
			},
		  }).then((response) => {
			resolve(response);
		  })
			.catch((error) => {
			  reject(error);
			});
		
		});

	handleSelect(value : string){
	  var val : string = value
	  window.location.replace(`#/components/${val.toLowerCase().replace(new RegExp(" ", "g"),"-")}`)
	}
	
	handleMenuClick(e){
    if (e.key != '5') {
      this.setState({ visible: false });
    }
	}
	
	handleVisibleChange = (flag) => {
		console.log(flag)
    this.setState({ visible: flag });
	}

	removeSession = () => {
		sessionStorage.removeItem("googleData")
		window.location.replace("/")

	}

	render(){
		if(!this.state.link)
		{
			if(this.state.data && this.state.data.email.split('@')[1] === 'simplusinnovation.com')
			{
				const SelectOptions = ["Affix", "Alert", "Card", "Icon And Name", "Input", "Jumbo Button", "Left Menu", "Modal", "Picture", "Profile", "Select", "Sub Left Menu", "Table", "Tabs", "Titled Card"]
				const Option = Select.Option;
				const SelectComponent = (
				<Select 
					//prefixCls="si-select"
					// icon={<Icon type="search"/>}
					className="search-component"
					mode="combobox"
					borderless
					placeholder="Search components..."
					style={{width:200, color:"#FFF"}}
					dropdownMenuStyle={{ maxHeight: '200px' }}
					onSelect={this.handleSelect}
				>
					{ SelectOptions.map((option, i) => {
					return <Option value={option} key={i}>{option}</Option>
					}) }
				</Select>)
				const menu = (
					<Menu onClick={this.handleMenuClick}>
						<Menu.Item key="0"><NavLink activeClassName="active" defaultChecked to="/home"  >Home</NavLink></Menu.Item>
						<Menu.Item key="1"><NavLink activeClassName="active" to="/components"  >Weaver</NavLink></Menu.Item>
						<Menu.Item key="2"><NavLink activeClassName="active" to="/solutions"  >Solutions</NavLink></Menu.Item>
						<Menu.Item key="3"><NavLink activeClassName="active" to="/mockups"  >Mockups</NavLink></Menu.Item>
						{/* <Menu.Item key="4">Settings</Menu.Item> */}
						<Menu.Divider />
						<Menu.Item key="5">{SelectComponent}</Menu.Item>
					</Menu>
				);
				
					return (
					<Router>
						<Switch>
						<Route path="/callback11" component={Login}/>
						<Route path="/">
							<div>
								<MediaQuery query="(min-width: 1100px)">
									<NavBar picture={
									<div style={{ display : "flex", flexDirection : "row", position: "relative", width: "20%" }}>
										<img src="/assets/Logo-01.png" width="120px" height="43px" style={{ marginTop: "1rem", marginBottom : "1rem" }} className="si-logo"/>
										<div style={{ borderRight : "1px solid white", flex : "1", height: "30px", margin: "auto"}}/>
									</div>
										}
										components={SelectComponent}>
										
										<NavLink activeClassName="active" defaultChecked to="/home"  ><NavBarItem>Home</NavBarItem></NavLink>
										<NavLink activeClassName="active" to="/components"  ><NavBarItem>Weaver</NavBarItem></NavLink>
										<NavLink activeClassName="active" to="/solutions"  ><NavBarItem>Solutions</NavBarItem></NavLink>
										<NavLink activeClassName="active" to="/mockups"  ><NavBarItem>Mockups</NavBarItem></NavLink>
										{this.state.data ? 
										<NavBarItem>{this.state.data.name.givenName}</NavBarItem>
										: null}
										<NavBarItem > <Button onClick={this.removeSession}>Logout</Button></NavBarItem>
										{/* <NavBarItem>Settings</NavBarItem> */}
									</NavBar>
								</MediaQuery>
								<MediaQuery query="(max-width : 1099px)">
									<NavBar picture={
										<div style={{ display : "flex", flexDirection : "row", position: "relative",  margin : "auto" }}>
											<img src="/assets/Logo-01.png" width="120px" height="43px" style={{ marginTop: "1rem", marginBottom : "1rem" }} className="si-logo"/>
										</div>
											}>
										<Dropdown overlay={menu} trigger={["click"]} onVisibleChange={this.handleVisibleChange} visible={this.state.visible}>
										<Icon type="bars" style={{ margin : "auto", fontSize : "20", color : "white" }}/>
									</Dropdown>
									</NavBar>
								</MediaQuery>
								<Switch>
									<Redirect exact from="/" to="/home"/>
									<Route path="/home" component={Home}/>
									<Route path="/components" component={SimplusUI}/>
									<Route path="/solutions" component={Solutions}/>
									<Route path="/mockups" component={Mockup}/>
								</Switch>
								<Footer/>
							</div>
						</Route>
						</Switch>
					</Router>
  
			)}
		else{
		return(
			<div style={{textAlign:"center"}}>
				<Alert type="error"  icon title="Warning"><p>Must Be A simplus Innovation User to Access this Content</p></Alert>
				<Button onClick={this.removeSession}>Click to Logout</Button>
			</div>
		)
		}
	}
	else{
		return (
			<Router>
		  <Switch>
			<Route path="/callback11" component={Login}/>
				<Login link={this.state.link} />

		  </Switch>
		</Router>
				)
	}
}
	}
	
export default Routes;
  
  ReactDOM.render(
		<LocaleProvider locale={enUS as any}>
			<Provider store={store}>
				<div>
					<Routes/>
				</div>
			</Provider>
		</LocaleProvider>
	  ,document.getElementById('mount'),
	  () => {
	}
	);