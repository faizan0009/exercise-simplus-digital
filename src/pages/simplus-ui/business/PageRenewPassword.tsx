import * as React from "react"
import RenewPassword from "./business-explained/RenewPassword"
import {CodeDisplayer} from "@simplus/siui"
import {Table} from "antd"

export class PageRenewPassword extends React.Component<any,any> {
    render(){
        return  (
            <div>
                <h1 className="component-title">Renew Password</h1>
                <div className="si-definition">
                    <p>Renew Password Page</p>
                </div>
    
                <h2>Usage</h2>
                <div className="si-usage">
                    <p>This is a ready to use renew password page. It allows you to style it according to your liking similar to rest of the authentication related pages</p>
                </div>
    
                <h2>Examples</h2>
    
                <div className="si-basic">
                    <div className="si-basic-demo">
                       <RenewPassword />
                    </div>
                    <div className="si-basic-explained">
                        <h3 className="header">Renew Password</h3>
                        <CodeDisplayer title="Renew Password" language="jsx" src="/src/pages/simplus-ui/business/business-explained/RenewPassword.tsx"/>
                    </div>
                </div>
                <h2 className="component-documentation">Documentation</h2>
                <h3 className="component-documentation-item">RenewPassword</h3>
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
                        {prop : "handleSubmit(info:{email, password})", type: "email: string, password: string, return type: void", description : "Callback function on when button is pressed"},
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
export default PageRenewPassword