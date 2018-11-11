import * as React from "react"
import { Card, Select, Button, ProfilePicture } from "@simplus/siui"
import {GridLayout, ListLayout, ListItem} from "@simplus/macaw-business"

const Option = Select.Option;
export class DashboardLayout extends React.Component<any,any>{
    render(){
		const items = [];
		for (let i = 1; i <= 24; i++) {
			items.push(<Card padding key={i} style={{height:100, display:"flex", justifyContent:"center", alignItems:"center"}} ><b>Secret Card {i}</b></Card>);
		}
		const profile = (<div style={{display:"flex",flexDirection:"column", flexGrow:1, alignItems:"center"}}><ProfilePicture url="/assets/macaw.jpg" margin size={100} rounded outstand/>
		<h3>Simplus Innovation</h3></div>
		)
		return (
			<div style={{display:"flex", flexGrow:1, height:800, margin:"1rem"}}>
				<ListLayout spacebetween={10} expandable>
					<ListItem height={250}>
						<ListLayout spacebetween={10} expandable direction="horizontal">
							<ListItem fill>
								<Card style={{display:"flex",flexGrow:1}}>
									<ListLayout expandable direction="horizontal">
										<ListItem width={175}>
											{profile}
										</ListItem>
										<ListItem fill>
											<ListLayout spacebetween={1} expandable direction="vertical">
												<ListItem height={100} style={{display:"flex", flexDirection:"column",alignItems:"center", justifyContent:"center", background:"#3FCC8C", color:"white"}}>
													<h2>NILTON</h2>
													<h4>CEO</h4>
												</ListItem>
												<ListItem fill style={{display:"flex", alignItems:"center", justifyContent:"center", background:"#3FCC8C", color:"white"}}>
													<p>Nilton is a 'No holds barred' Entrepreneur with over<br/> 5 years experience in analytics & operations</p>
												</ListItem>
											</ListLayout>
										</ListItem>
									</ListLayout>
								</Card>
							</ListItem>
							<ListItem fill>
								<Card style={{display:"flex",flexGrow:1}}>
									<ListLayout spacebetween={1} expandable>
										<ListItem fill style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", background:"#EEE"}}><h3>Personality Traits</h3></ListItem>
										<ListItem height={120}>
											<ListLayout spacebetween={1} expandable direction="horizontal">
												<ListItem fill style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",color:"white", background:"#3FCC8C"}}>
													<div>Leadership</div>
													<p>100%</p>
												</ListItem>
												<ListItem fill style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",color:"white", background:"#04a5f5"}}>
													<div>Optimistic</div>
													<p>80%</p>
												</ListItem>
												<ListItem fill style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",color:"white", background:"#f44237"}}>
													<div>Imaginative</div>
													<p>50%</p>
												</ListItem>
											</ListLayout>
										</ListItem>
									</ListLayout>
								</Card>
							</ListItem>
						</ListLayout>
					</ListItem>
					<ListItem fill>
						<GridLayout style={{height:540}} spacebetween={10} maxColumns={3} columns={2} minColumns={1}>
							{items}
						</GridLayout>
					</ListItem>
				</ListLayout>
			</div>
		)
    }
}

export default DashboardLayout