import * as React from "react"
import {LogIn, FillLayout} from "@simplus/macaw-business"

export default function(props){

	return(
		<FillLayout style={{height : "600px", width : "100%"}}> 
			<LogIn
				title={<img src="/assets/Logo-01.png" style={{width : "200px", backgroundSize: "100% 100%"}}/>}
				titleBackground={"url(/assets/Loginbackground.png)"}
				style={{background : "url(/assets/Colorful.jpg)", backgroundSize: "100% 100%", backgroundRepeat: "no-repeat"}}  
				handleSubmit={ info => alert("Submitted : "+JSON.stringify(info))}></LogIn>
		</FillLayout>
	)

}