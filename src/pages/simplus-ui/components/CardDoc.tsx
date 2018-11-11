import * as React from "react"
import {CardDoc, CodeDisplayer} from "@simplus/siui"

export default function (){

	return(

		<div>
		<h1 className="component-title" >SubLeft Menu</h1>
		<div className="si-definition">
			<p>Sub menu from another one</p>
		</div>

		<h2>Usage</h2>
			<div className="si-usage">
				<p>Card usually created to fit a mockup but I don't really know how to make it different from a regular card.</p>
			</div>

		<h2>Examples</h2>
		<div className="si-basic">
			<div className="si-basic-demo">
				<CardDoc rounded >
					Hey
				</CardDoc>	
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Simple Tabs</h3>
				<CodeDisplayer title="Simple Tabs" language="jsx" src="/src/pages/simplus-ui/components/components-explained/IconAndNames/SimpleIconAndName.tsx"/>
			</div>
		</div>

	</div>

	)

}