import * as React from "react"
import {Card, ProfilePicture} from "@simplus/siui"
import {Button} from "antd"

export interface MockupCardOwnProps {
	description : string
	client : string
	copyright : string
	pictureClassName ?: string
	logo : string
	link : string
	style ?: React.CSSProperties
}

export class MockupCard extends React.Component<MockupCardOwnProps, any>{

	render(){
		const pictureClassName = ["picture"]
		const logo = this.props.logo;
		let picture = null;
		if(this.props.pictureClassName)
			pictureClassName.push(this.props.pictureClassName)
	
		picture = typeof logo === "string" ? <ProfilePicture url={this.props.logo} margin size={100} rounded classname={pictureClassName.join(" ")}/>: <div className={pictureClassName.join(" ")} style={{borderRadius:"50%",padding:"2rem"}}>{this.props.logo}</div>;

		return(
			<Card style={this.props.style ||  { borderRadius : "4px" }}>
				<div className="background">
					<div className="back-items">
						<div className="description-and-logo">
							<div className="card">
								<p className="description">{this.props.description}</p>
							</div>
							<div className="picture">
								{/* <ProfilePicture url={this.props.logo} margin size={100} rounded classname={pictureClassName.join(" ")}/> */}
								{picture}
								<p className="client">{this.props.client}</p>
								<p className="copyright">{this.props.copyright}</p>
							</div>
						</div>
					</div>
				</div>
				<div className="content">
					<Button className="view-button"><a href={this.props.link} target="_blank">View</a></Button>
				</div>
			</Card>
		)

	}

}