import * as React from "react";
import { Affix, Card, CodeDisplayer } from "@simplus/siui";
import { Button, Table} from "antd";

import BasicAffix from "./components-explained/Affix/BasicAffix"
import OffsetAffix from "./components-explained/Affix/OffsetAffix"
import AffixContainer from "./components-explained/Affix/AffixContainer"


export default function(props){

    let container : Element;

    return (
        <div>
            <h1 className="component-title">Affix</h1>
            <div className="si-definition">
                <p>Affix, component that sticks to the container</p>
            </div>

            <h2>Usage</h2>
            <div className="si-usage">
                <p>Sometimes, it is useful to keep element fixed on the screen so that the user doesn't have to scroll to the top to click a button or get some information. For instance, a menu or a nav bar could be kept visible to the user to facilitate the interactions.</p>
            </div>

            <h2>Examples</h2>

            <div className="si-basic">
                <div className="si-basic-demo">
                    <div className="web-nav-demo">
                        <BasicAffix/>
                    </div>
                </div>
                <div className="si-basic-explained">
                    <h3 className="header">Basic Affix</h3>
                    <CodeDisplayer title="Basic Affix" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Affix/BasicAffix.tsx"/>
                </div>
            </div>

            <div className="si-basic">
                <div className="si-basic-demo">	
                    <div className="web-nav-demo">
                        <OffsetAffix/>
                    </div>
                </div>
                <div className="si-basic-explained">
                    <h3 className="header">Affix with offset</h3>
                    <CodeDisplayer title="Affix that has an offset" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Affix/OffsetAffix.tsx"/>
                </div>
            </div>


            {/* <div className="si-basic">
                <div className="si-basic-demo">	
                        <div className="si-card">
                        <AffixContainer/>
                        </div>
                   
                </div>
                <div className="si-basic-explained">
                    <h3 className="header">Affix within a container</h3>
                    <CodeDisplayer title="The affix is included inside a container" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Affix/AffixContainer.tsx"/>
                </div>
            </div> */}

            <h2 className="component-documentation">Documentation</h2>
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
				{prop : "className", type: "String", description : "class of the alert"},
				{prop : "style", type: "React.CSSProperties", description : "Style of the alert"},
				{prop : "affix", type : "Boolean", description : "Wheter the Affix is affix or not"},
				{prop : "offset", type : "number", description : "Size of the offset in px"},
				{prop : "target", type : "() => Element)", description : "Callback that gives the container of the Affix"},
			]}>

			</Table>

        </div>
    );

}
