## Standard Development Flow

<br/>

### 1.Installation
<br/>
You can install weaver using Weaver Starter Kit or do a manual installation

<br/>

#### Weaver Starter Kit

- Clone the weaver starter kit from https://bitbucket.org/simplusinnovation/weaver-starter/src/master/

- Run npm install
<br/>

#### Manual Installation

Create a react project. If you dont know how to create a react application, see [example](https://codeburst.io/building-your-first-react-app-c1f6eb814205). Once the react project is created. Install following two npm packages to be able to use weaver library.

<br/>

```bash
npm install --save antd
npm install --save @simplus/siui
```
<br/>

Make sure following line is added in index file in the root of the project to ensure that the styles are imported as well 
<br/>	
```bash
import 'antd/dist/antd.less';
import '@simplus/siui/style/index.less'
```
<br/>

 ### 2.Use weaver's components 

 <br/>

In order to use a component, open a new javascript file in your project, import `react` and then import whatever component you want from `@simplus/siui` like illustrated below. For each and every component of the library, we have examples with its related code ! Copy-paste is life so we implemented it to make you gain time !

<br/>
 
 ```jsx 
 import * as React from "react"
 import { Alert } from "@simplus/siui"
 
 export default function(props){
	 
	 return (
		<Alert type="success">
			<p>Some content</p>
		</Alert>
	)
}
```

<br/>

### 3.Development & Debugging

<br/>

Run the project with the well known command :

<br/>

```bash
npm start
```

<br/>

And visit your local server : [http://127.0.0.1:8080](http://127.0.0.1:8080)

<br/>