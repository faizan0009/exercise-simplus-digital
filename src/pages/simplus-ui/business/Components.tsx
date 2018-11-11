import * as React from "react"
import {NavLink, Route, Switch, Redirect} from "react-router-dom"
import {SubLeftMenu, SubLeftMenuGroup, SubLeftMenuItem} from "@simplus/siui"
import {Row, Col} from "antd"
import Home from "./Home"
import FillLayout from "./FillLayout"
import TableCardComboLayout from "./TableCardComboLayout"
import Login from "./PageLogin"
import ForgotPassword from "./PageForgotPassword"
import PasswordRenewed from "./PagePasswordRenewed"
import PasswordRequestSend from "./PagePasswordRequestSend"
import RenewPassword from "./PageRenewPassword"
import InvalidToken from "./PageInvalidToken"
import DownloadModalPage from "./PageDownloadModal"
import ShareModalPage from "./PageShareModal"

export class Components extends React.Component<any,any>{
    render(){
        return <div>
            <Row>
                <Col xs={6}>
                    <SubLeftMenu>
                        <SubLeftMenuGroup title="Layouts">
                            <NavLink to={"/components/fill-layout"}><SubLeftMenuItem>FillLayout</SubLeftMenuItem></NavLink>
                            <NavLink to={"/components/table-card-combo-layout"}><SubLeftMenuItem>TableCardCombo Layout</SubLeftMenuItem></NavLink>
                        </SubLeftMenuGroup>
                        <SubLeftMenuGroup title="Auth" collapse={true}>
                            <NavLink to={"/components/login"}><SubLeftMenuItem>LogIn</SubLeftMenuItem></NavLink>
                            <NavLink to={"/components/forgot-password"}><SubLeftMenuItem>Forgot password</SubLeftMenuItem></NavLink>
                            <NavLink to={"/components/password-renewed"}><SubLeftMenuItem>Password renewed</SubLeftMenuItem></NavLink>
                            <NavLink to={"/components/invalid-token"}><SubLeftMenuItem>Invalid Token</SubLeftMenuItem></NavLink>
                            <NavLink to={"/components/password-request-send"}><SubLeftMenuItem>Password request send</SubLeftMenuItem></NavLink>
                            <NavLink to={"/components/renew-password"}><SubLeftMenuItem>Renew password</SubLeftMenuItem></NavLink>
                        </SubLeftMenuGroup>
                        <SubLeftMenuGroup title="Data" collapse={true}>
                            <NavLink to={"/components/download-modal"}><SubLeftMenuItem>DownloadModal</SubLeftMenuItem></NavLink>
                            <NavLink to={"/components/share-modal"}><SubLeftMenuItem>ShareModal</SubLeftMenuItem></NavLink>
                        </SubLeftMenuGroup>
                    </SubLeftMenu>
                </Col>
                <Col xs={24-6}>
                    <Switch>
                        <Redirect exact from="/components" to="/components/home"/>
                        <Route path="/components/home" component={Home}></Route>
                        <Route path="/components/fill-layout" component={FillLayout}></Route>
                        <Route path="/components/table-card-combo-layout" component={TableCardComboLayout}></Route>
                        <Route path="/components/login" component={Login}></Route>
                        <Route path="/components/forgot-password" component={ForgotPassword}></Route>
                        <Route path="/components/password-renewed" component={PasswordRenewed}></Route>
                        <Route path="/components/invalid-token" component={InvalidToken}></Route>
                        <Route path="/components/password-request-send" component={PasswordRequestSend}></Route>
                        <Route path="/components/renew-password" component={RenewPassword}></Route>
                        <Route path="/components/download-modal" component={DownloadModalPage}></Route>
                        <Route path="/components/share-modal" component={ShareModalPage}></Route>
                    </Switch>
                </Col>
            </Row>
        </div>
    }
}
export default Components