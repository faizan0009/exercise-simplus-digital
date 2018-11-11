import * as React from "react"
import {DatePicker, Select} from "@simplus/siui"
import * as moment from 'moment';

const Option = Select.Option;
export default function(props){
	return (
		<DatePicker 
			label="DatePicker: "
			tooltip="Data available from Jan 20 - Jan 28" 
			customOption
			onChange={dates=>alert("From: "+dates.startDate.format('lll')+" , To: "+dates.endDate.format('lll'))} 
			style={{minWidth: 100}} 
			placeholder="Select a date">
			<Option value = "past hour">Past Hour</Option>
			<Option value = "past day">Past Day</Option>
			<Option value = "past 7 days">Past Week</Option>
			<Option value = "past 30 days">Past Month</Option>
		</DatePicker>

	)
}