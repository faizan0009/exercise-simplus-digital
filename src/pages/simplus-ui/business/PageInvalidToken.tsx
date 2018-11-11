import * as React from "react"
import {CodeDisplayer} from "@simplus/siui"
import {Table} from "antd"
import InvalidToken from "./business-explained/InvalidToken"

export class PageInvalidToken extends React.Component<any,any> {
    render(){
        return (
            <div>
                <h1 className="component-title">Invalid Token</h1>
                <div className="si-definition">
                    <p>Invalid Token page</p>
                </div>
    
                <h2>Usage</h2>
                <div className="si-usage">
                    <p>This is a ready to use expired token page. It allows you to style it according to your liking similar to rest of the authentication related pages</p>
                </div>
    
                <h2>Examples</h2>
    
                <div className="si-basic">
                    <div className="si-basic-demo">
                       <InvalidToken/>
                    </div>
                    <div className="si-basic-explained">
                        <h3 className="header">Invalid Token</h3>
                        <CodeDisplayer title="Invalid Token" language="jsx" src="/src/pages/simplus-ui/business/business-explained/InvalidToken.tsx"/>
                    </div>
                </div>
                <h2 className="component-documentation">Documentation</h2>
                <h3 className="component-documentation-item">InvalidToken</h3>
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
                        {prop : "redirectLink", type : "string|JSX.Element", description : "Redirect link after few seconds"},
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
export default PageInvalidToken