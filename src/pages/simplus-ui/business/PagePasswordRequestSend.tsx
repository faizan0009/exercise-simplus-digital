import * as React from "react"
import { CodeDisplayer } from "@simplus/siui"
import {Table} from "antd"
import PasswordChangeSend from "./business-explained/PasswordRequestSend"

export class PagePasswordRequestSend extends React.Component<any,any> {
    render(){
        return (
            <div>
                <h1 className="component-title">Password Request Send</h1>
                <div className="si-definition">
                    <p>Password Request Send Page</p>
                </div>

                <h2>Usage</h2>
                <div className="si-usage">
                    <p>This is a ready to use password request send page. It allows you to style it according to your liking similar to rest of the authentication related pages</p>
                </div>

                <h2>Examples</h2>

                <div className="si-basic">
                    <div className="si-basic-demo">
                        <PasswordChangeSend />
                    </div>
                    <div className="si-basic-explained">
                        <h3 className="header">Password Request Send</h3>
                        <CodeDisplayer title="Password Request Send" language="jsx" src="/src/pages/simplus-ui/business/business-explained/PasswordRequestSend.tsx"/>
                    </div>
                </div>
                <h2 className="component-documentation">Documentation</h2>
                <h3 className="component-documentation-item">PasswordChangeSend</h3>
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
export default PagePasswordRequestSend