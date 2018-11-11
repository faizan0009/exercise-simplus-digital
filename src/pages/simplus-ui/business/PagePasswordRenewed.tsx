import * as React from "react"
import {CodeDisplayer} from "@simplus/siui"
import {Table} from "antd"
import PasswordRenewed from "./business-explained/PasswordRenewed"

export class PagePasswordRenewed extends React.Component<any,any> {
    render(){
        return (
            <div>
                <h1 className="component-title">Password Renewed</h1>
                <div className="si-definition">
                    <p>Password renewed page</p>
                </div>
    
                <h2>Usage</h2>
                <div className="si-usage">
                    <p>This is a ready to use password renewed page. It allows you to style it according to your liking similar to rest of the authentication related pages</p>
                </div>
    
                <h2>Examples</h2>
    
                <div className="si-basic">
                    <div className="si-basic-demo">
                       <PasswordRenewed/>
                    </div>
                    <div className="si-basic-explained">
                        <h3 className="header">Password Renewed</h3>
                        <CodeDisplayer title="Password Renewed" language="jsx" src="/src/pages/simplus-ui/business/business-explained/PasswordRenewed.tsx"/>
                    </div>
                </div>
                <h2 className="component-documentation">Documentation</h2>
                <h3 className="component-documentation-item">PasswordRenewed</h3>
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
                        {prop : "loggedInLink", type : "string|JSX.Element", description : "Redirect link after successful login"},
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
export default PagePasswordRenewed