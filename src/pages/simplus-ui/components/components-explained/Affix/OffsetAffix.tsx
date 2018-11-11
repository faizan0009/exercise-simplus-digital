import * as React from "react"
import {Affix, Card} from "@simplus/siui"

export default function(props){

    return(
        <Affix offset={100}><Card padding margin style={{ width : "300px" }}><p>Sticked card</p><p>Sticked card</p><p>Sticked card</p></Card> </Affix>
    )

}