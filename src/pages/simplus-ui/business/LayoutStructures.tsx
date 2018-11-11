import * as React from "react"
import {Table} from "antd"
import {CodeDisplayer} from "@simplus/siui"
import BasicFillLayout from "./business-explained/BasicFillLayout"
import SimpleListLayout from "./business-explained/SimpleListLayout"
import SimpleGridLayout from "./business-explained/GridLayout"
import DashBoardLayout from "./business-explained/DashboardLayout"

export class LayoutStructuresPage extends React.Component<any,any>{
    render(){
        return (
            <div>
            <h1 className="component-title">Layout Structures</h1>
            <div className="si-definition">
                <p>Layout structures contain both list and grid layouts</p>
            </div>

            <h2>Usage</h2>
            <div className="si-usage">
                <p>Simple layout for horiztal or vertical list. Several props allows for styling without the use of CSS</p>
            </div>

            <h2>Examples</h2>

            <div className="si-basic">
                <div className="si-basic-demo">
                    <SimpleListLayout />
                </div>
                <div className="si-basic-explained">
                    <h3 className="header">List Layout</h3>
                    <CodeDisplayer title="Card for data" language="jsx" src="/src/pages/simplus-ui/business/business-explained/SimpleListLayout.tsx"/>
                </div>
            </div>
			<div className="si-basic">
                <div className="si-basic-demo">
                    <SimpleGridLayout />
                </div>
                <div className="si-basic-explained">
                    <h3 className="header">Grid Layout</h3>
                    <CodeDisplayer title="Grid with fixed header" language="jsx" src="/src/pages/simplus-ui/business/business-explained/GridLayout.tsx"/>
                </div>
            </div>
            <div className="si-basic">
                <div className="si-basic-demo">
                    <DashBoardLayout />
                </div>
                <div className="si-basic-explained">
                    <h3 className="header">Dashboard Layout</h3>
                    <CodeDisplayer title="List and Grid Layout combination" language="jsx" src="/src/pages/simplus-ui/business/business-explained/DashBoardLayout.tsx"/>
                </div>
            </div>

            <h2 className="component-documentation">Documentation</h2>
                <h3 className="component-documentation-item">List Layout</h3>
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
                        {prop : "direction", type : "horizontal | vertical", description : "Direction of layout"},
                        {prop : "wrap", type : "boolean", description : "Wrap content after max width/height"},
                        {prop : "expandable", type : "boolean", description : "Expand the list to match the height of parent"},
                        {prop : "scrollable", type : "boolean", description : "Allows the content area to be scrollable"},
                    ]}>
                </Table>
                <h3 className="component-documentation-item">List Item</h3>
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
                        {prop : "fill", type : "boolean", description : "Fill available space"},
                        {prop : "height", type : "number", description : "Height of item in pixels"},
                        {prop : "width", type : "number", description : "Width of item in pixels"},
                    ]}>
                </Table>
				<h3 className="component-documentation-item">Grid Layout</h3>
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
                        {prop : "spacebetween", type : "number", description : "Space between cells"},
                        {prop : "minColumns", type : "number", description : "Minimum columns displayed when low resolution"},
                        {prop : "columns", type : "number", description : "Columns displayed when medium resolution"},
                        {prop : "maxColumns", type : "number", description : "Maximum columns displayed when high resolution"},
                        {prop : "header", type : "JSX.Element | JSX.Element[]", description : "Header area for filters"},
                        {prop : "scrollable", type : "boolean", description : "Allows the content area to be scrollable"},
                    ]}>

                </Table>
        </div>
        )
    }
}

export default LayoutStructuresPage