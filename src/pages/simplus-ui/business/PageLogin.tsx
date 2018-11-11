import * as React from "react"
import {CodeDisplayer} from "@simplus/siui"
import {Table} from "antd"
import Login from "./business-explained/Login"
import LoginLoading from "./business-explained/LoginLoading"
import LoginCustom from "./business-explained/LoginCustom"

export class PageLogin extends React.Component<any,any> {
    render(){
        return (
        <div>
            <h1 className="component-title">Login</h1>
            <div className="si-definition">
                <p>Login page</p>
            </div>

            <h2>Usage</h2>
            <div className="si-usage">
                <p>This is a ready to use login password page. It allows you to style it according to your liking similar to rest of the authentication related pages</p>
            </div>

            <h2>Examples</h2>

            <div className="si-basic">
                <div className="si-basic-demo">
                   <Login/>
                </div>
                <div className="si-basic-explained">
                    <h3 className="header">Login</h3>
                    <CodeDisplayer title="Login" language="jsx" src="/src/pages/simplus-ui/business/business-explained/Login.tsx"/>
                </div>
            </div>
            <div className="si-basic">
                <div className="si-basic-demo">
                    <LoginLoading/>
                </div>
                <div className="si-basic-explained">
                    <h3 className="header">Login Loading</h3>
                    <CodeDisplayer title="Forgot Password Custom Title" language="jsx" src="/src/pages/simplus-ui/business/business-explained/LoginLoading.tsx"/>
                </div>
            </div>
            <div className="si-basic">
                <div className="si-basic-demo">
                    <LoginCustom/>
                </div>
                <div className="si-basic-explained">
                    <h3 className="header">Login Custom Title</h3>
                    <CodeDisplayer title="Login Custom Title" language="jsx" src="/src/pages/simplus-ui/business/business-explained/LoginCustom.tsx"/>
                </div>
            </div>
                
            <h2 className="component-documentation">Documentation</h2>
            <h3 className="component-documentation-item">Login</h3>
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
                    {prop : "handleSubmit(info:{email, password, remember})", type: "email: string, password: string, remember?: boolean, return type: void", description : "Callback function on when button is pressed"},
                    {prop : "title", type : "string|JSX.Element", description : "Title"},
                    {prop : "style", type : "React.CSSProperties", description : "Styling properties"},
                    {prop : "forgotPasswordLink", type : "string", description : "Redirect link for forgot password page"},
                    {prop : "titleBackground", type : "string", description : "Background for title"},
                    {prop : "loading", type : "boolean", description : "Displays loading icon"},
                ]}>

            </Table>	

        </div>
        )
    }
}
export default PageLogin