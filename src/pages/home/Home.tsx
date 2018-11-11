import * as React from "react"
import {Card} from "@simplus/siui"
import MediaQuery from "react-responsive"

const css = `
.si-nav-bar {
	position: fixed;
	z-index : 999;
	width: 100%;
	
	overflow-x : hidden;
	
	
	&::before, &::after{
		box-sizing: border-box;
	}
}

.footer {
	height: 150px;
    position: absolute;
    top: 100%;
    width: 100%;
    background-color: #3FCC8C;
    display: flex;
    justify-content: space-around;
    padding: 2rem;
}

body{
	overflow-x : hidden;
}
`

export class Home extends React.Component<any, any>{

	render(){	
		return (
			<div className="parallax">
				<MediaQuery query="(min-width: 1100px)">			
					<div className="parallax__layer parallax__layer--back">
						<img src="/assets/SIllustrationResizeTrucsaCote.png" className="deco" />
						<div className="si-description">
							<h2><span className="welcome">Welcome</span> to Simplus Digital</h2>
							<p> Be ready to experience the best JavaScript software kit for developers. From an open source UI library to data-driven APIs, you will find everything you need to build great software in a matter of weeks. Have fun!</p>
						</div>
						<img src="/assets/line-03.png" className="line" />
						<div className="si-description2">
							<h2><span className="welcome">Good design goes to heaven</span></h2>
							<h2>Bad design goes everywhere</h2>
							<p>Design is key in everything we do. Feel free to leverage our many design components to enhance your own apps. Trust us, great design will bring your app to another level!</p>
						</div>
					</div>
					<div className="parallax__layer parallax__layer--mi-back">
						<img src="/assets/bubble1.png" className="bubble1" />
						<img src="/assets/bubbleMiddlegreen.png" className="bubbleMiddleGreen" />
						{/* <img src="/assets/bubblebottom-02.png" className="bubbleBottomGreen" /> */}
					</div>
					<div className="parallax__layer parallax__layer--mi-front">
						<img src="/assets/bubble4-02.png" className="bubbleBottomBlue" />
						<img src="/assets/bubbleMiddle-02.png" className="bubbleMiddleBlue" />
					</div>
					<div className="parallax__layer parallax__layer--front">
						<img src="/assets/bubble2.png" className="bubble2" />
						<img src="/assets/bubble3-02.png" className="bubble3" />
						<img src="/assets/Sillustration2.png" className="logo2" />
					</div>
					<div className="parallax__layer brol-cat1">
						<img src="/assets/Brol1-04.png" className="brol1" />
						<img src="/assets/Brol3-04.png" className="brol3" />
						<img src="/assets/brol7-04.png" className="brol7" />
						<img src="/assets/brol9-02.png" className="brol9" />
						<img src="/assets/brol11.png" className="brol11" />
						<img src="/assets/brol15-02.png" className="brol15" />
					</div>
					<div className="parallax__layer brol-cat2">
						<img src="/assets/brol2-04.png" className="brol2" />
						<img src="/assets/brol4-04.png" className="brol4" />
						<img src="/assets/brol8-02.png" className="brol8" />
						<img src="/assets/brol12.png" className="brol12" />
						<img src="/assets/brol14-02.png" className="brol14" />
						<img src="/assets/brol16-02.png" className="brol16" />
					</div>
					<div className="parallax__layer brol-cat3">
						<img src="/assets/brol5-04.png" className="brol5" />
						<img src="/assets/brol6-04.png" className="brol6" />
						<img src="/assets/brol10-02.png" className="brol10" />
						<img src="/assets/brol13.png" className="brol13" />
						<img src="/assets/brol17-02.png" className="brol17" />
					</div>
					<div className="parallax__layer parallax__layer--base">
						<img src="/assets/SIllustrationResize.png" className="logo" />
					</div >
					<div className="size"/>
				</MediaQuery >
				<MediaQuery query="(max-width: 1099px)">
					<div className="parallax__layer parallax__layer--deep">
						<img src="/assets/SIllustrationResize.png" className="logo" />
						<img src="/assets/Sillustration2.png" className="logo2" />
					</div>
					<div className="parallax__layer parallax__layer--back">
						<img src="/assets/SIllustrationResizeTrucsaCote.png" className="deco" />
						<img src="/assets/bubble2.png" className="bubble2" />
						<img src="/assets/bubble4-02.png" className="bubble4" />
					</div>
					
					<div className="parallax__layer parallax__layer--mi-base">
						{/* <img src="/assets/bubbleBlue.png" className="bubble2" /> */}
						<div className="si-description">
							<h2><span className="welcome">Welcome</span> to Simplus Digital</h2>
							<p> Be ready to experience the best JavaScript software kit for developers. Have fun!</p>
						</div>
						{/* <div className="circle"/> */}
						<div className="si-description2">
							<h2><span className="welcome">Good design goes to heaven</span></h2>
							<h2>Bad design goes everywhere</h2>
							<p>Design is key in everything we do. Feel free to leverage our many design components to enhance your own apps. Trust us, great design will bring your app to another level!</p>
						</div>
						{/* <div className="circle2"/> */}
					</div>
					<div className="parallax__layer parallax__layer--base">
						<img src="/assets/bubble1.png" className="bubble1" />
					</div>
					<div className="size"/>
				</MediaQuery >
				<style>
					{css}
				</style>
			</div>
		)}

}

export default Home;