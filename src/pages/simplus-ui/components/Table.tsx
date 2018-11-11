import * as React from "react"
import {Table} from "antd"
import { CodeDisplayer } from "@simplus/siui"
import BasicTable from "./components-explained/Table/BasicTable";

export default function(names){

	return (
		<div>
			<h1 className="component-title">Tables</h1>
				<div className="si-definition">
					<p>Table within you can display data</p>
				</div>

			<h2>Usage</h2>
				<div className="si-usage">
					<p>Same usage as for the <code>antd</code> Table. These tables were so well done that we only adapt the design to our personnality. Thank you <code>antd</code> !!</p>
				</div>

			<h2>Examples</h2>
				<div className="si-basic">
					<div className="si-basic-demo">	
						<BasicTable/>
					</div>
					<div className="si-basic-explained">
						<h3 className="header">Basic Table</h3>
						<CodeDisplayer title="Basic Table" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Table/BasicTable.tsx"/>
					</div>
				</div>
				<h2 className="component-documentation">Documentation</h2>
				
				See <a href="https://ant.design/components/table/#API">Ant documentation</a>
			
		</div>

	)

}