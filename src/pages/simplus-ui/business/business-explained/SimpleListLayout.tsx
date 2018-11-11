import * as React from "react"
import { Card } from "@simplus/siui"
import {ListLayout, ListItem, FillLayout} from "@simplus/macaw-business"

export class SimpleListLayoutPage extends React.Component<any,any>{
    render(){
		return(
			<Card style={{display:"flex", flexGrow:1,minWidth: 500, height:200}}> 
				<ListLayout expandable direction="horizontal" spacebetween={1}>
					<ListItem width={200} style={{background:"#CCC"}}>
					</ListItem>
					<ListItem fill>
						<ListLayout spacebetween={1} expandable direction="vertical">
							<ListItem height={75} style={{background:"#EEE"}}/>
							<ListItem fill style={{background:"#DDD"}} />
						</ListLayout>
					</ListItem>
				</ListLayout>
			</Card>
		)
    }
}

export default SimpleListLayoutPage