import * as React from "react"

import {InvalidToken, FillLayout} from "@simplus/macaw-business"

export class InavlidToken extends React.Component<any,any> {
    render(){
        return <FillLayout style={{height : "600px", width : "100%"}}> 
            <InvalidToken
                redirectLink="/components/login"
                title={<img src="/assets/Logo-01.png" style={{width : "200px"}}/>}
                style={{background : "url(/assets/Colorful.jpg)", backgroundSize: "100% 100%", backgroundRepeat: "no-repeat"}}  
                >
            </InvalidToken>
        </FillLayout>
    }
}
export default InavlidToken