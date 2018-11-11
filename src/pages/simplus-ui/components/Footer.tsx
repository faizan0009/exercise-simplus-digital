import * as React from "react"
import {Icon} from "antd"

export default function Footer(){
	
	
	return (
		<div className="footer">
			<div className="col">
				<div className="title">Simplus Innovation</div>
				<span><img src="/assets/Simplus.png"  height="10" width="10"/>  <a href="https://www.simplusinnovation.com/" style={{ color : "white" }}>simplusinnovation.com</a></span>
				<span><Icon type="github" /> GitHub</span>
			</div>
		
			<div className="col">
				<div className="title">Resources</div>
				<span>Weaver</span>
				<span>Bluejayz</span>
				<span>Robin</span>
				<span>Hornbill</span>
			</div>
		
			<div className="col">
				<div className="title">Community</div>
				<span>FAQ</span>
				<span>Bug repports</span>
				<span>Stackoverflow</span>
			</div>
		</div>
	)

}