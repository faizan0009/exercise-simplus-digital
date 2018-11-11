import * as React from "react"
import {ForgotPassword, FillLayout} from "@simplus/macaw-business"

export default function(props){

	return(
		<FillLayout style={{height : "600px", width : "100%"}}> 
            <ForgotPassword
                title={<img src="/assets/Logo-01.png" style={{width : "200px"}}/>}
                titleBackground={"url(https://images.pexels.com/photos/574345/pexels-photo-574345.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb)"}
                style={{background : "url(https://images.pexels.com/photos/574345/pexels-photo-574345.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb)"}} 
                handleSubmit={ info => alert("Submitted : "+JSON.stringify(info))}></ForgotPassword>
        </FillLayout>
	)

}