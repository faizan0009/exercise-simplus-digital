import * as React from "react"

import { ShareModal } from "@simplus/macaw-business"
import { Button } from "antd"

export class PageShareModal extends React.Component<any,any>{
    state = {
        visible : false
    }
    render(){
        return <div>
            <Button onClick={evt => {
                this.setState({visible : true})
            }}> Share </Button>
            
            <ShareModal 
                visible={this.state.visible}
                onClose={() => {
                    this.setState({ visible : false })
                }}
                url="/this/is/the/super/url"
                onShareByMail={ type => {
                    alert("Sharing "+ type )
                    this.setState({ visible : false })
                }}
            />
        </div>
    }
}

export default PageShareModal