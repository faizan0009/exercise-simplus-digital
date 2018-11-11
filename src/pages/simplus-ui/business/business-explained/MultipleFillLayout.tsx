import * as React from "react"
import {range} from "lodash"
import {RenewPassword, FillLayout} from "@simplus/macaw-business"

export default function(props){

	return(
		<FillLayout style={{ width : "300px", height : "300px"}}>
			<FillLayout style={{background : "#3FCC8C"}}>
				<div>
					{range(0,800).map( i => <p>Item {i}</p>)}
				</div>
			</FillLayout>
		</FillLayout>
	)

}
