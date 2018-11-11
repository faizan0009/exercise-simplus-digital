import * as React from "react"
import * as ReactMarkdown from "react-markdown"
import {CodeBlock} from "./CodeBlock"

export default function(){
	
	const intro = require('raw-loader!./markdown/intro.md');
	const defintion = require('raw-loader!./markdown/definition.md');
	const version = require('raw-loader!./markdown/version.md');
	const developmentWorkflow = require('raw-loader!./markdown/developmentWorkflow.md');

	return(
		<div>
			<h1 className="component-title">Getting started</h1>
			<div className="si-definition">
				{/* <MarkdownPage path="./markdown/intro.md" /> */}
				<ReactMarkdown source={intro} />
				<div className="pic-plus">
					<img width="200" height="200" src="/assets/Simplus.png"/>
					<div className="plus">+</div>
					<img width="130" height="200" src="https://t.alipayobjects.com/images/rmsweb/T16xRhXkxbXXXXXXXX.svg"/>
				</div>
				<ReactMarkdown source={defintion} />
				{/* <div dangerouslySetInnerHTML={renderText(strings.definition)}/> */}
			</div>

			<ReactMarkdown source={version} />
			<ReactMarkdown source={developmentWorkflow} renderers={Object.assign({}, ReactMarkdown.renderers, { CodeBlock : CodeBlock })} />
		</div>
	)

}