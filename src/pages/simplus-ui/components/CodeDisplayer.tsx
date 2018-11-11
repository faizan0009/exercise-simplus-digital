import * as React from "react";
import { Card, CodeDisplayer } from "@simplus/siui"

export const sampleText = 'import * as React from "react" \nexport function MyProps(){ \nreturn<Card vMargin padding> \n    <h1>Code Displayer</h1> \n    <CodeDisplayer language="typescript"> \n        {sampleText} \n    </CodeDisplayer> \n</Card>}';

export default function(props){

    return(
        <Card vMargin padding>
            <h1>Code Displayer</h1>
            <CodeDisplayer language="jsx">
                {sampleText}
            </CodeDisplayer>

            <CodeDisplayer title="From file" language="jsx" src="/demo/src/pages/CodeDisplayer.tsx"/>
        </Card>
    );

}