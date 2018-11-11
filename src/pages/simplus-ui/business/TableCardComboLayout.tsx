import * as React from "react"
import {Table} from "antd"
import {CodeDisplayer} from "@simplus/siui"
import BasicFillLayout from "./business-explained/BasicFillLayout"
import TableCardComboLayout from "./business-explained/TableCardComboLayout"

export class TableCardComboLayoutPage extends React.Component<any,any>{
    render(){
        return (
            <div>
            <h1 className="component-title">Table Card Combo Layout</h1>
            <div className="si-definition">
                <p>Table on left and card on right</p>
            </div>

            <h2>Usage</h2>
            <div className="si-usage">
                <p>This is one of the favorite layout in Simplus. It is a very elegent way to show table, button and details card on the same page</p>
            </div>

            <h2>Examples</h2>

            <div className="si-basic">
                <div className="si-basic-demo">
                    <TableCardComboLayout />
                </div>
                <div className="si-basic-explained">
                    <h3 className="header">TableCardCombo Layout</h3>
                    <CodeDisplayer title="TableCardCombo Layout" language="jsx" src="/src/pages/simplus-ui/business/business-explained/TableCardComboLayout.tsx"/>
                </div>
            </div>
            <h2 className="component-documentation">Documentation</h2>
                <h3 className="component-documentation-item">TableCardComboLayout</h3>
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
                        {prop : "style", type : "React.CSSProperties", description : "Styling properties"},
                        {prop : "className", type : "string", description : "Class name"},
                        {prop : "padding", type : "boolean", description : "Add small padding"},
                        {prop : "loading", type : "boolean", description : "Displays loading icon to be used when data is loading"},
                        {prop : "gutter", type : "number", description : "Space between left and right column"},
                        {prop : "rightColWidth", type : "number", description : "Width of right column"},
                        {prop : "table", type : "JSX.Element | JSX.Element[]", description : "Table for the left column"}
                    ]}>
                </Table>
        </div>
        )
    }
}

export default TableCardComboLayoutPage