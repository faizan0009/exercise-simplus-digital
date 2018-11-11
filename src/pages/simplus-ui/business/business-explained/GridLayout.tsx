import * as React from "react"
import { Card, Select, Button } from "@simplus/siui"
import {GridLayout} from "@simplus/macaw-business"

const Option = Select.Option;
export class GridLayoutPage extends React.Component<any,any>{
    render(){
		const testWidth = 200
		const items = [];
		for (let i = 0; i < 24; i++) {
			items.push(<Card padding key={i} ><p>Card {i}</p></Card>);
		}
		const topMenu = (<div style={{display:"flex", alignItems:"center", padding:"1rem", marginBottom:10, height:50, background:"#DDD",}}>
				<Select defaultValue="lucy" style={{ width: 120}}>
					<Option value="jack">Jack</Option>
					<Option value="lucy">Lucy</Option>
					<Option value="Yiminghe">yiminghe</Option>
				</Select>
			</div>)
        return <GridLayout header={topMenu} spacebetween={10} maxColumns={3} columns={2} minColumns={1} style={{height:"30rem", margin:20, background:"#EEE"}}>
					{items}
				</GridLayout>
    }
}

export default GridLayoutPage