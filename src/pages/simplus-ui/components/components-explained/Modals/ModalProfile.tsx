import * as React from "react"
import { Modal, Card, TitledCard } from "@simplus/siui"
import { Button } from "antd"


export default function(props){

    return(
        <ProfileModal/>
    )		

}

class ProfileModal extends React.Component<any, any> {
    constructor(props){
        super(props)
        this.state = {
            visible : false,
        }
        this.showModal = this.showModal.bind(this)
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
                <Button onClick={this.showModal}>Profile Card Modal</Button>
                <Modal onClickOutside style={{ backgroundColor : "rgba(0,0,0,0.4)" }} visible={this.state.visible} onCancel={this.onCancel} ownCard={
					<TitledCard rounded picture="https://organicthemes.com/demo/profile/files/2012/12/profile_img.png">
                        <Card title="Hello!" margin padding >This modal includes a Profile Card.</Card>
                    </TitledCard>} >
                </Modal>
            </div>
        );
    }
}