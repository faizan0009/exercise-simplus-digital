import * as React from "react";
import { Modal, Card } from "@simplus/siui"
import { Button } from "antd"


export default function(props){

    return(
        <SimpleModal/>
    )		
}

class SimpleModal extends React.Component<any, any> {
    constructor(props){
        super(props)
        this.state = {
            visible : false,
        }
        this.showModal = this.showModal.bind(this);
    }

    showModal () {
        this.setState({
            visible : true,
            
        });

    }

    onCancel = (e) => {
        this.setState({
            visible : false,
        });
    }

    render(){
        return (
            <div>
                <Button onClick={this.showModal}>Simple Modal</Button>
                <Modal onClickOutside visible={this.state.visible} onCancel={this.onCancel} title="Hello" >
                    <Card title="Hello!" margin padding >This is an example of a simple Modal.</Card>
                </Modal>
            </div>
        );
    }
}