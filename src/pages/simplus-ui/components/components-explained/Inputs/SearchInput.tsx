import * as React from "react"
import { Input } from "@simplus/siui"

const Search = Input.SearchInput;

export default function(props){

	return(
		<div className="si-inputs-demo">
			<Search label="Filter" onSearch={ value =>alert("searched")}/>
		</div>
	)

}