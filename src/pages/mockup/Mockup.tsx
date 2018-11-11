import * as React from "react"
import {MockupCard} from "./MockupCard"

const background = <div></div>

export class Mockup extends React.Component<any, any>{
	
	render(){

		return (
		<div style={{ margin : "auto", width : "80%", paddingTop : "2rem"}}>
			<div className="si-mokup-projects">
				<MockupCard 
					description="This platform allows companies to access reports about their employees’ health and wellbeing, which they can benchmark against other companies in their industry."
					client="Employee wellbeing platform"
					copyright="Icas"
					link="https://marvelapp.com/8gjd9dj/screen/28854996"
					pictureClassName="icas"
					logo="/assets/Icas-07.png"
				/>
				<MockupCard 
					description="This reporting platform allows telecom operators to gain better visibility across their electronic recharge distribution chain. The flexibility of the platform allows data teams to create their own reports in a very intuitive manner."
					client="E-recharge reporting platform"
					copyright="Seamless"
					link="https://marvelapp.com/2cg088h/screen/30182777"
					pictureClassName="seamless"
					logo="/assets/Seamless-07.png"
				/>
				<MockupCard 
					description="This platform allows mining experts to act upon safety issues that are related to fatigue. It combines data from different fatigue systems to provide an executive safety view with the ability to drill down to specific issues."
					client="Fatigue analytics"
					logo="/assets/Anglo-07.png"
					copyright="Anglo American"
					pictureClassName="anglo"
					link="https://marvelapp.com/24ffj85/screen/29223398"
				/>
				<MockupCard 
					description="This app offers a way for people to create real estate projects and automatically get financial reports and metrics depending on the project inputs. Charts and tables can be downloaded for further analyses."
					logo="/assets/Invhestia-07.png"
					pictureClassName="invhestia"
					client="Real estate financial model"
					copyright="InVhestia"
					link="https://marvelapp.com/4924gjg/screen/29067905"
				/>
				<MockupCard 
					description="This solution brings together patients, general practitioners, specialists and hospital facilities in order to overcome the issues that come with disjointed, inefficient and opaque referral systems."
					logo="/assets/EpioneNet-07.png"
					pictureClassName="epionet"
					client="Healthcare referral system"
					copyright="EpioneNet"
					link="https://marvelapp.com/6908hia/screen/31603936"
				/>
				<MockupCard 
					description="This platform allows for NGO campaign managers to effectively budget costs and donations based on historical performance. At the same time, it provides fundraising managers to access better forecasting views."
					logo="/assets/Msf-07.png"
					pictureClassName="msf"
					client="Budgeting & forecasting app"
					copyright="Doctors Without Borders"
					link="https://marvelapp.com/21i607e/screen/23996435"
				/>
				<MockupCard 
					description="This solution allows South African sports teams to gain insights on their social media presence, from their followers’ demography all the way to recommendations on the brands they could leverage as sponsors."
					logo="/assets/Megapro.png"
					pictureClassName="megapro"
					client="Sports marketing analytics"
					copyright="Megapro"
					link="https://marvelapp.com/61fjich/screen/29821573"
				/>
				<MockupCard 
					description="This app provides mining experts with dashboards and analytics reports about near-miss collision situations in their mines. The underlying data comes from a sophisticated collision avoidance system."
					logo="/assets/Altech-07.png"
					pictureClassName="altech"
					client="Collision avoidance analytics"
					copyright="Altech Netstar"
					link="https://marvelapp.com/2326005/screen/28114673"
				/>
				<MockupCard 
					description="This solution allows logistics companies to easily track and monitor their vehicles in real-time with insightful indicators such as fuel consumption, driver behaviours, and vehicle maintenance."
					logo="/assets/Crossroads.png"
					pictureClassName="crossroad"
					client="Logsitics platform"
					copyright="Crossroads"
					link="https://marvelapp.com/9jg721e/screen/32578258"
				/>
				<MockupCard 
					description="This solution aims at helping water purification companies to track the performance of their assets according to multiple indicators such as flow, pressure and conductivity."
					logo="/assets/Nuwater.png"
					pictureClassName="nuwater"
					client="Water purification analytics"
					copyright="NuWater"
					link="https://marvelapp.com/6db7b04"
				/>
				<MockupCard 
					description="This reporting solution allows telecom operators to have an easy access to insights across all their key fields, from recharge sales all the way to network performance."
					logo="/assets/Simplus.png"
					pictureClassName="reporting"
					client="Telecom reporting platform"
					copyright="Simplus Innovation"
					link="https://marvelapp.com/53dac17/screen/25388061"
				/>
				<MockupCard 
					description="This solution allows clothing retailers to analyse their sales performance on a day-to-day and optimise stock to ensure products are sold effectively across their multiple stores."
					logo="/assets/Burgundy.png"
					pictureClassName="burgundy"
					client="Clothing retail analytics"
					copyright="Burgundy Fly"
					link="https://marvelapp.com/2ag129e/screen/33079904"
				/>
				<MockupCard 
					description="This solution allows for a telecom billing provider to leverage the data they generate in order to help their clients better understand their sales performance across multiple geographies."
					logo="/assets/VasX-01.png"
					pictureClassName="vas-x"
					client="Telecom billing reporting"
					copyright="Vas-X"
					link="https://marvelapp.com/42ccgbd/screen/33589964"
				/>
				<MockupCard 
					description="This solution allows for a value chain transformation consultancy to help their clients maximise their factories' efficiency through better data collection and reporting."
					logo="/assets/Pollen-01.png"
					pictureClassName="pollen"
					client="Value chain optimisation"
					copyright="Pollen Consulting"
					link="https://marvelapp.com/a743b34/screen/33683698"
				/>
				<MockupCard 
					description="This solution allows for scholars, teachers and parents to fill in school-related information and surveys as well as to access key information about learning environment and overall learning progress."
					logo="/assets/ASE-01.png"
					pictureClassName="ase"
					client="Learning optimisation tool"
					copyright="African School of Excellence"
					link="https://marvelapp.com/398b6ii/screen/34018108"
				/>
				<MockupCard 
					description="This solution allows for entrepreneurs to brand themselves on a portal that is accessible to for investors to find gems and remain posted on the latest SME news."
					logo="/assets/Venturecap.png"
					pictureClassName="venture"
					client="SME exposure platform"
					copyright="VentureCap"
					link="https://marvelapp.com/10i43cag/screen/33966826"
				/>
				{/* <MockupCard 
					description=""
					logo=""
					pictureClassName=""
					client=""
					copyright=""
					link=""
					style={{ visibility : "hidden" }}
				/> */}
			</div>
		</div>
		)

		

	}

}

export default Mockup;