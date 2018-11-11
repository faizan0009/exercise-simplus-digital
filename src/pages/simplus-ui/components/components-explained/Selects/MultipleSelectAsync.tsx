import * as React from "react"
import {Switch, MultiSelect, MultiSelectOption as Option} from "@simplus/siui"

class Demo extends React.Component<any, any>{
	lastFetchId;
	constructor(props) {
		super(props);
		this.lastFetchId = 0;
	  }	
	state = {
		data: [],
		value: [],
		fetching: false,
	}
	fetchUser = (value) => {
		this.lastFetchId += 1;
		const fetchId = this.lastFetchId;
		this.setState({ data: [], fetching: true });
		if(value === "")
		{
			this.setState({ fetching: false });
			return;
		}
		fetch("https://restcountries.eu/rest/v2/all/")
		  .then(response => response.json())
		  .then((body) => {
			if (fetchId !== this.lastFetchId) { // for fetch callback order
			  return;
			}
			
			const filteredList = 	body.filter(user=>
				user.name.toLowerCase().startsWith(value.toLowerCase())
			)

			const data = filteredList.map(user =>
			({
					text: `${user.name}`,
					value: user.name,	
				})
			);
			this.setState({ data, fetching: false });
		  });
	  }
	  handleChange = (value) => {
		  console.log("Return value "+ value.value )
		this.setState({
		  value,
		  data: [],
		  fetching: false,
		});
	  }

	render(){
		const { fetching, data, value } = this.state;
		return(
			<div className="multi-select-demo">
				<MultiSelect
					style={{height:40}}
					width={200}
					loading={fetching}
					onSearch={this.fetchUser}
        			onChange={this.handleChange}
					placeholder="Type to start searching">	
					{
						data.map((d,index) => 
							<Option key={index} id={d.value} value={d.text}>{d.text}</Option>
					)}	
				</MultiSelect>
			</div>
		)
	}
}
export default Demo;