import * as React from "react"
import {CodeDisplayer} from "@simplus/siui"
import BasicFillLayout from "./business-explained/BasicFillLayout"
import MultipleFillLayout from "./business-explained/MultipleFillLayout"

export class FillLayoutPage extends React.Component<any,any>{
    render(){
        return (
            <div>
            <h1 className="component-title">Fill Layout</h1>
            <div className="si-definition">
                <p>Rectangular container with colored background</p>
            </div>

            <h2>Usage</h2>
            <div className="si-usage">
                <p>Fill layout is used to create a nice looking container whose height and width can be adjusted accordingly.</p>
            </div>

            <h2>Examples</h2>

            <div className="si-basic">
                <div className="si-basic-demo">
                    <BasicFillLayout />
                </div>
                <div className="si-basic-explained">
                    <h3 className="header">Basic Fill Layout</h3>
                    <CodeDisplayer title="Basic Fill Layout" language="jsx" src="/src/pages/simplus-ui/business/business-explained/BasicFillLayout.tsx"/>
                </div>
            </div>
            <div className="si-basic">
                <div className="si-basic-demo">
                    <MultipleFillLayout />
                </div>
                <div className="si-basic-explained">
                    <h3 className="header">Multiple Fill Layout</h3>
                    <CodeDisplayer title="Multiple Fill Layout" language="jsx" src="/src/pages/simplus-ui/business/business-explained/MultipleFillLayout.tsx"/>
                </div>
            </div>
        </div>
        )
    }
}

export default FillLayoutPage