import * as React from "react";
import { ProfilePicture } from "@simplus/siui";


export default function(props){

	return (
		<div>
			<ProfilePicture url="/assets/macaw.jpg" margin size={100} outstand />
			<ProfilePicture url="/assets/macaw.jpg" margin size={50} />
		</div>
	)

}