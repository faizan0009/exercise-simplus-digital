import * as React from "react"
import {CodeDisplayer} from "@simplus/siui"
import ForgotPassword from "./business-explained/ForgotPassword"
import ForgotPasswordCustomTitle from "./business-explained/ForgotPasswordCustomTitle"
import {Table} from "antd"

export class PageForgotPassword extends React.Component<any,any> {
    render(){
        return (
            <div>
                <h1 className="component-title">Forgot Password</h1>
                <div className="si-definition">
                    <p>Forgot Password page</p>
                </div>
    
                <h2>Usage</h2>
                <div className="si-usage">
                    <p>This is a ready to use forgot password page. It allows you to style it according to your liking similar to rest of the authentication related pages</p>
                </div>
    
                <h2>Examples</h2>
    
                <div className="si-basic">
                    <div className="si-basic-demo">
                       <ForgotPassword/>
                    </div>
                    <div className="si-basic-explained">
                        <h3 className="header">Forgot Password</h3>
                        <CodeDisplayer title="Forgot Password" language="jsx" src="/src/pages/simplus-ui/business/business-explained/ForgotPassword.tsx"/>
                    </div>
                </div>
                <h2 className="component-documentation">Documentation</h2>
                <h3 className="component-documentation-item">ForgotPassword</h3>
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
                        {prop : "handleSubmit(info:{email})", type: "email: string, return type: void", description : "Callback function on when button is pressed"},
                        {prop : "logInLink", type : "string|JSX.Element", description : "Redirect link after successful login"},
                        {prop : "style", type : "React.CSSProperties", description : "Styling properties"},
                        {prop : "title", type : "string", description : "Title"},
                        {prop : "titleBackground", type : "string", description : "Background for title"},
                        {prop : "loading", type : "boolean", description : "Displays loading icon"},
                    ]}>

                </Table>
            </div>
        )
    }
}
export default PageForgotPassword