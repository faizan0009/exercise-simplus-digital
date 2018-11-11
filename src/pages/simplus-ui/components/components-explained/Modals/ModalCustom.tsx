import * as React from "react";
import { Modal, Card } from "@simplus/siui"
import { Button } from "antd"


export default function(props){

	return(
		<CustomCardModal/>
	)		


}

class CustomCardModal extends React.Component<any, any> {
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
                <Button onClick={this.showModal}>Custom Card Modal</Button>
                <Modal onClickOutside style={{ backgroundColor : "#3FCC8C" }} visible={this.state.visible} onCancel={this.onCancel} ownCard={<Card rounded margin padding>
                    <Card title="Hello!" margin padding >This is an example of a custom modal.</Card>
                    <Card title="Hello!" margin padding >This has a different background color.</Card>
                    </Card>} >
                </Modal>
            </div>
        );
    }
}