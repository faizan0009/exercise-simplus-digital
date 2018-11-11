import * as React from "react"
import {MultiSelect, MultiSelectOption as Option, Switch} from "@simplus/siui"
import * as _ from "lodash"

class Demo extends React.Component<any, any>{
	state = {
		borderless: false,
		showLabel: true,
		label:"My Country",
		showAllText: true,
		allSelectedText:"All countries",
		matchWidth: true,
		showTooltip: false,
		disabled: false,
		tooltip: undefined,
		openUp: false,
		invertSelection: false,
		hideSelected:false
	}
	options = ["Australia", "Belgium","Canada","France","Germany","India","Mexico","Nepal","Pakistan","South Africa","Sri Lanka","United States"]
	handleToggle = (prop) => {
		return (enable) => {
			this.setState({ [prop]: enable });
		}
	}
	handleLabelChange = (label) => {
		return () => {
			if(this.state.showLabel)
				this.setState({label: undefined, showLabel: false})
			else
				this.setState({label, showLabel: true});
		} 
	}
	handleAllTextChange = (text) => {
		return () => {
			if(this.state.showAllText)
				this.setState({allSelectedText: undefined, showAllText: false})
			else
				this.setState({allSelectedText: text, showAllText: true});
		} 
	}
	handleTooltipChange = (tooltip) => {
		return () => {
			if(this.state.showTooltip)
				this.setState({tooltip: undefined, showTooltip: false})
			else
				this.setState({tooltip, showTooltip: true});
		} 
	}
	onChange = (selected) => {
		let output = selected.value
		if(this.state.invertSelection)
		{
			output = _.differenceWith(this.options, selected.value, _.isEqual);
		}
		console.log(output);
	}
	onMenuClosed = (selected) => {
		let output = selected.value
		if(this.state.invertSelection)
		{
			output = _.differenceWith(this.options, selected.value, _.isEqual);
		}
		alert(output);
	}
	render(){
		const label = <span>My Country</span>
		let placeholder = "Select your country";
		if(this.state.invertSelection)
			placeholder = "Choose items to be excluded"
		return(
			<div className="multi-select-demo">
				<div style={{display:"flex", marginBottom:"1rem"}}>
					<Switch className="demo-switch" label="Borderless" checked={this.state.borderless} onChange={this.handleToggle("borderless")}/>
					<Switch className="demo-switch" label="Label" checked={this.state.showLabel} onChange={this.handleLabelChange("My Country")}/>
					<Switch className="demo-switch" label="Tooltip" checked={this.state.showTooltip} onChange={this.handleTooltipChange("Choose your country")}/>
					<Switch className="demo-switch" label="Custom 'All' text" checked={this.state.showAllText} onChange={this.handleAllTextChange("All countries")}/>
					<Switch className="demo-switch" label="Invert Selection" checked={this.state.invertSelection} onChange={this.handleToggle("invertSelection")}/>
					<Switch className="demo-switch" label="Disabled" checked={this.state.disabled} onChange={this.handleToggle("disabled")}/>
					<Switch className="demo-switch" label="OpenUp" checked={this.state.openUp} onChange={this.handleToggle("openUp")}/>
					<Switch className="demo-switch" label="Hide Selected" checked={this.state.hideSelected} onChange={this.handleToggle("hideSelected")}/>
					
				</div>
				<MultiSelect 
					width={250} 
					label={this.state.label}  
					allSelectedText={this.state.showAllText?(items)=>this.state.allSelectedText+" ("+items+")":null} 
					customSelectedText="countries"
					borderless={this.state.borderless} 
					tooltip={this.state.tooltip}
					openUp={this.state.openUp}
					hideSelected={this.state.hideSelected}
					disabled={this.state.disabled}
					onChange={this.onChange}
					onMenuClosed={this.onMenuClosed}
					placeholder={placeholder}>
					{this.options.map( (values, index)=> <Option key={index} value={values}>{values}</Option>)}
				</MultiSelect>
			</div>
		)
	}

}
export default Demo;