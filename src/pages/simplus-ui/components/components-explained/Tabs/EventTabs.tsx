import * as React from "react"
import {Tabs, TabPane} from "@simplus/siui"
import {Button} from "antd"

export class EventTabs extends React.Component<any, any>{
	
	constructor(props){
		super(props)
		this.state = {
			selected : 0
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.setState({
			selected : (++this.state.selected) % 3,
		})
	}

	render(){

		return (
			<div className="si-tabs">	
				<Tabs selectedDefault={0} selected={this.state.selected}>
					<TabPane label="Tab 1">
						<div>This is my tab 1 contents!</div>
					</TabPane>
					<TabPane label="Tab 2">
						<div>This is my tab 2 contents!</div>
					</TabPane>
					<TabPane label="Tab 3">
						<div>This is my tab 3 contents!</div>
					</TabPane>
				</Tabs>
				<Button onClick={this.handleClick}>Next Tab</Button>
			</div>
		)

	}

}
	
export default EventTabs