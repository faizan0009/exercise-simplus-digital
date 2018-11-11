import * as React from "react";
import { Notification, Card, CodeDisplayer} from "@simplus/siui"
import { Button } from "antd";



export default function(props){

	var visible : boolean;

	return (
		<div>
			<h1 className="component-title">Notifications</h1>

			<div className="si-definition">
				<p>Notification showing the result of a request</p>
			</div>

			<h2>Usage</h2>
				<div className="si-usage">
					<p>Notification is used to provide a user with a feedback message which disappears after few seconds.</p>
				</div>

			<h2>Examples</h2>

			<div className="si-basic">
				<div className="si-basic-demo">	
					<div className="si-modal-container"><Notification visible> Standard Notification disappears after 3 second</Notification></div>
				</div>
				<div className="si-basic-explained">
					<h3 className="header">Notification</h3>
					<CodeDisplayer title="Notification" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Notifications/SimpleNotification.tsx"/>
				</div>
			</div>

			<div className="si-basic">
				<div className="si-basic-demo">	
					<div className="si-modal-container"><Notification type="warning" timeout={10000} visible>Notification with a timeout of 10 sec and different type</Notification></div>
				</div>
				<div className="si-basic-explained">
					<h3 className="header">Notification with a custom timeout</h3>
					<CodeDisplayer title="Notification with a custom timeout" language="jsx" src="/src/pages/simplus-ui/components/components-explained/Notifications/CustomTimeoutNotification.tsx"/>
				</div>
			</div>
		</div>
	)
}