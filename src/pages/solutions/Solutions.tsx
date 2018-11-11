import * as React from "react"
import {MockupCard} from "./../mockup"


export class Solutions extends React.Component<any, any>{

	render(){
		return (
				<div style={{ margin : "auto", width : "80%", paddingTop : "2rem"}}>
					<div className="all-mokups" >
						<div className="si-mokup-projects">
							<MockupCard 
								description="This app provides mining experts with dashboards and analytics reports about near-miss collision situations in their mines. The underlying data comes from a sophisticated collision avoidance system."
								logo={<i className="solution-icon icon-mining"/> as any}
								pictureClassName="altech"
								client="Collision avoidance analytics"
								copyright="Simplus"
								link="http://13.126.255.138"
							/>	
							<MockupCard 
								description="This app offers a way for people to create real estate projects and automatically get financial reports and metrics depending on the project inputs. Charts and tables can be downloaded for further analyses."
								logo={<i className="solution-icon icon-realestate"/> as any}
								pictureClassName="invhestia"
								client="Real estate financial model"
								copyright="Simplus"
								link="http://35.154.107.97/"
							/>
							<MockupCard 
								description="This reporting platform allows telecom operators to gain better visibility across their electronic recharge distribution chain. The flexibility of the platform allows data teams to create their own reports in a very intuitive manner."
								client="E-recharge reporting platform"
								copyright="Simplus"
								link="http://13.126.255.138"
								pictureClassName="seamless"
								logo={<i className="solution-icon icon-telco"/> as any}
							/>
							<MockupCard 
								description=""
								client=""
								copyright=""
								link=""
								pictureClassName=""
								logo=""
								style={{ visibility : "hidden" }}
							/>
							<MockupCard 
								description=""
								client=""
								copyright=""
								link=""
								pictureClassName=""
								logo=""
								style={{ visibility : "hidden" }}
							/>
							<MockupCard 
								description=""
								client=""
								copyright=""
								link=""
								pictureClassName=""
								logo=""
								style={{ visibility : "hidden" }}
							/>
							{/* <i className="icon-telco"/> */}
						</div>
					</div>
				</div>
		)
	}
}

export default Solutions