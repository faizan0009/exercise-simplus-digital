import * as React from "react";
import { TitledCardTest, ProfilePicture } from "@simplus/siui"


export default function(props){

	return (
		<TitledCardTest
			header={<div style={{ paddingTop : "4rem", paddingLeft : "4rem", paddingRight : "4rem" }}>Hello</div>} onClose={ () => alert("Close")} 
			picture={<ProfilePicture url="https://organicthemes.com/demo/profile/files/2012/12/profile_img.png" margin size={150} rounded outstand />}>
			<p>Test</p>
			<p>Test</p>
			<p>Test</p>
		</TitledCardTest>
	)
}
 
 
 