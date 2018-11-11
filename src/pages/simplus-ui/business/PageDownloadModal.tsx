import * as React from "react"

import { DownloadModal } from "@simplus/macaw-business"
import { Button } from "antd"

export class PageDownloadModal extends React.Component<any,any>{
    state = {
        visible : false
    }
    render(){
        return <div>
            <Button onClick={evt => {
                this.setState({visible : true})
            }}> Download </Button>
            
            <DownloadModal 
                visible={this.state.visible}
                options={[
                    {type : "csv", title : "Download CSV"},
                    {type : "pdf", title : "Download PDF"},
                ]}
                onClose={() => {
                    this.setState({ visible : false })
                }}
                onDownload={ type => {
                    alert("Downloading "+type)
                    this.setState({ visible : false })
                }}
            />
        </div>
    }
}

export default PageDownloadModal