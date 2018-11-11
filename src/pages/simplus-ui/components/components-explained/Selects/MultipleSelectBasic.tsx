import * as React from "react"
import {MultiSelect, MultiSelectOption as Option, Switch} from "@simplus/siui"

class Demo extends React.Component<any, any>{
	render(){
		const label = <span>My Country</span>
		return(
			<div className="multi-select-demo">
				<MultiSelect 
					width={250} 
					label={(selected)=><span>Recently visited countries: {selected.length}</span>}  
					showItemsOnMenuClosed={true} 
					placeholder="Recent countries">
					<Option value="Australia">Australia</Option>
					<Option value="Belgium">Belgium</Option>
					<Option value="Canada">Canada</Option>
					<Option value="France">France</Option>
					<Option value="Germany">Germany</Option>
					<Option value="India">India</Option>
					<Option value="Mexico">Mexico</Option>
					<Option value="Nepal">Nepal</Option>
					<Option value="Pakistan">Pakistan</Option>
					<Option value="South Africa">South Africa</Option>
					<Option value="Sri Lanka">Sri Lanka</Option>
					<Option value="United States">United States</Option>
				</MultiSelect>
			</div>
		)
	}

}
export default Demo;