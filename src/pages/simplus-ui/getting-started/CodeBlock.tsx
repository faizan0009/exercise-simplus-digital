import * as React from "react"
import * as Highlight from "react-highlight";

export class CodeBlock extends React.Component<any, any>{

	render(){
		return(
			<Highlight className={this.props.language} ref="code">
				{this.props.literal}
			</Highlight>
		)
	}

}