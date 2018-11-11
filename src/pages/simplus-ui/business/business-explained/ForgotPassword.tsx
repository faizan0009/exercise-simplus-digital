import * as React from "react"
import {ForgotPassword, FillLayout} from "@simplus/macaw-business"

export default function(props){

	return(
		<FillLayout style={{height : "600px", width : "100%"}}> 
            <ForgotPassword
                title={<img src="/assets/Logo-01.png" style={{width : "200px"}}/>}
                style={{background : "url(/assets/Colorful.jpg)", backgroundSize: "100% 100%", backgroundRepeat: "no-repeat"}} 
                handleSubmit={ info => alert("Submitted : "+JSON.stringify(info))}></ForgotPassword>
        </FillLayout>
	)

}