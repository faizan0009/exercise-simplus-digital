import * as React from "react";
import {Card, Modal, TitledCard, CodeDisplayer} from "@simplus/siui"
import {Button, Table} from "antd";
import ModalCustom from "./components-explained/Modals/ModalCustom"
import ModalProfile from "./components-explained/Modals/ModalProfile"
import ModalSimple from "./components-explained/Modals/ModalSimple"

export default function(props){

    return (
    <div >
        <h1 className="component-title">Modals</h1>

        <div className="si-definition">
                <p>Dialog in a floating layer</p>
            </div>

        <h2>Usage</h2>
            <div className="si-usage">
                <p>Modals are the kind of component used when you need the user to interact at some point without going to another page. Hence you can display feedback, informations, etc in a new floating layer.</p>
            </div>

        <h2>Examples</h2>

		<div className="si-basic">
			<div className="si-basic-demo">	
				 <div className="si-modal-container"><ModalSimple/></div>
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Simple modal</h3>
				<CodeDisplayer title="Simple modal" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Modals/ModalSimple.tsx"/>
			</div>
		</div>

        <div className="si-basic">
			<div className="si-basic-demo">	
				 <div className="si-modal-container"><ModalCustom/></div>
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Custom modal</h3>
				<CodeDisplayer title="Custom modal" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Modals/ModalCustom.tsx"/>
			</div>
		</div>

        <div className="si-basic">
			<div className="si-basic-demo">	
				 <div className="si-modal-container"><ModalProfile/></div>
			</div>
			<div className="si-basic-explained">
				<h3 className="header">Profile modal</h3>
				<CodeDisplayer title="Profile modal" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Modals/ModalProfile.tsx"/>
			</div>
		</div>
        <h2 className="component-documentation">Documentation</h2>
			<Table 
			pagination={false}
			columns={[
				{
					dataIndex : "prop",
					key : "prop",
					title: "Prop"
				},
				{
					dataIndex : "type",
					key : "type",
					title: "Type"
				},
				{
					dataIndex : "description",
					key : "description",
					title : "Description"
				}
			]} dataSource={[
				{prop : "className", type: "String", description : "class of the alert"},
				{prop : "style", type: "React.CSSProperties", description : "Style of the alert"},
				{prop : "visible", type : "Boolean", description : "Whether the modal is visible or not"},
				{prop : "title", type : "string", description : "Title of the modal"},
				{prop : "onClickOutside", type : "Boolean", description : "Whether the modal is canceled when the user click outside"},
				{prop : "onCancel", type : "() => void", description : "Action when the user cancels the modal"},
				{prop : "backgroundCoulor", type : "string", description : "Color of the background"},
				{prop : "ownCard", type : "JSX.Element", description : "Custom card for the modal"},
			]}>

			</Table>
    </div>);

}